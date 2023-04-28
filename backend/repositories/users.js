const Role = require('../models/role');
const Booking = require('../models/booking.js');
const User = require('../models/user');
const roleRepository = require("./role");

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: Role,
  });

  return user;
};

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    
    if (userData.roleId){
      const role = await roleRepository.getRoleById(userData.roleId);
      await user.addRole(role);
    }
    else{
      const role = await roleRepository.getRoleById("3");
      await user.addRole(role);
    }

    return user;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.destroy({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
};

const updateUser = async (userData, userId) => {
  try {
    await User.update(userData, {
      where: {
        id: userId,
      },
    });

    const user = await User.findByPk(userId);

    return user;
  } catch (error) {
    return error;
  }
};

const createUserBooking = async (bookingData, userId) => {
  const bookings = await Booking.create({ ...bookingData, UserId: userId });

  return bookings;
};

const getAllUserBookingsById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: {
      model: Booking,
    },
  });

  return user;
};

const login = async (userData) => {
  const user = await User.findOne({
    where: {
      email: userData.email,
      password: userData.password,
    },
  });

  if (user) {
    return true;
  } else {
    return false;
  }
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } });

  return user;
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
  getUserByEmail,
};
