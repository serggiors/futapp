const userRepository = require('../repositories/users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { sendMail } = require('../services/mail');

const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();

  res.status(200).json({ users });
};

const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.userId);

  res.json({ user });
};

const createUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    await body('email').isEmail().run(req);
    await body('name').notEmpty().isAlphanumeric().run(req);
    await body('password').notEmpty().isLength({ min: 6 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const isAlreadyAdded = await userRepository.getUserByEmail(email);

    //const user = await userRepository.createUser(req.body);

    if (isAlreadyAdded) {
      return res.status(400).json({
        status: 'FAILED',
        message: `Ya existe Usuario con el email '${email}'`,
      });
    } else {
      sendMail(email, password, name);
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userRepository.createUser({
      ...req.body,
      password: hash,
    });

    const token = jwt.sign(
      { userId: user.id, name: user.name },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'Usuario creado con exito',
      token: token,
      expiresIn: 86400,
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      error: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = userRepository.deleteUser(req.params.userId);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    await body('email').isEmail().run(req);
    await body('name').notEmpty().isAlphanumeric().run(req);
    await body('password').notEmpty().isLength({ min: 6 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await userRepository.updateUser(req.body, req.params.userId);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createUserBooking = async (req, res) => {
  try {
    await body('name').notEmpty().isAlphanumeric().run(req);
    await body('description').isString().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const bookings = await userRepository.createUserBooking(
      req.body,
      req.params.userId
    );

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllUserBookingsById = async (req, res) => {
  try {
    console.log('req.params.userId', req.params.userId);

    const bookings = await userRepository.getAllUserBookingsById(
      req.params.userId
    );
    
    delete bookings.dataValues.password;
    
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    await body('email').isEmail().run(req);
    await body('password').notEmpty().isLength({ min: 6 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await userRepository.getUserByEmail(email);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Fallo la autenticacion: Usuario no existe.' });
    }

    const { dataValues } = user;

    const passwordIsValid = await bcrypt.compare(password, dataValues.password);

    if (!passwordIsValid) {
      return res
        .status(401)
        .json({ message: 'Fallo la autenticacion: error en contraseña.' });
    }

    const token = jwt.sign(
      {
        userId: dataValues.id,
        name: dataValues.name,
        lastname: dataValues.lastname,
      },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    //Delete propertie 'password' of result User.
    delete dataValues.password;

    res.status(200).json({
      message: 'Autenticacion exitosa',
      token: token,
      user: dataValues,
      expiresIn: 86400,
    });
  } catch (error) {
    console.log('ERROR', error.message);
    res.status(401).json({ message: 'Ingreso no autorizado' });
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log('req', req.body);
  try {
    await body('email').isEmail().run(req);
    await body('name').notEmpty().isAlphanumeric().run(req);
    await body('password').notEmpty().isLength({ min: 6 }).run(req);
    await body('lastname').notEmpty().isAlpha().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const isAlreadyAdded = await userRepository.getUserByEmail(email);

    if (isAlreadyAdded) {
      return res.status(400).json({
        status: 'FAILED',
        message: `Ya existe Usuario con el email '${email}'`,
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userRepository.createUser({
      ...req.body,
      password: hash,
    });

    const token = jwt.sign(
      { userId: user.id, name: user.name, lastname: user.lastname },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    const { dataValues } = user;
    delete dataValues.password;

    res.status(201).json({
      message: 'Usuario creado con exito',
      token: token,
      user: dataValues,
      expiresIn: 86400,
    });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({
      error: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  createUserBooking,
  getAllUserBookingsById,
  login,
  signup,
};
