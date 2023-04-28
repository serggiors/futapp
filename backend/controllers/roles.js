const rolRepository = require ("../repositories/role.js");
const { body, validationResult } = require('express-validator');

const getAllRoles = async (req, res) => {
  const roles = await rolRepository.getAllRoles();

  res.status(200).json({ roles });
};

const getRolById = async (req, res) => {
  const rol = await rolRepository.getRolById(req.params.rolId);

  res.json({ rol });
}

const createRol = async (req, res) => {
  try {
    await body('name').notEmpty().isAlphanumeric().run(req);
    await body('descripcion').notEmpty().isAlpha().run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const rol = await rolRepository.createRol(req.body);

    res.json({ rol });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteRol = async (req, res) => {
  try {
    const rol = rolRepository.deleteRol(req.params.rolId)

    res.json({ rol });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateRol = async (req, res) => {
  try {
    await body('name').notEmpty().isAlphanumeric().run(req);
    await body('descripcion').notEmpty().isAlpha().run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const rol = await rolRepository.updateRol(req.body, req.params.rolId);

    res.json({ rol })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllRoles,
  createRol,
  deleteRol,
  updateRol,
  getRolById,
}