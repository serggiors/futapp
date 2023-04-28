const soccerfieldRepository = require ("../repositories/soccerfields.js");
const { body, validationResult } = require('express-validator');



const getAllSoccerFields = async (req, res) => {

  const response = await soccerfieldRepository.getAllSoccerFields();
  res.status(200).json({ response });
};

const getSoccerFieldById = async (req, res) => {
  const soccerfield = await soccerfieldRepository.getSoccerFieldById(req.params.soccerfieldId);

  res.json({ soccerfield });
}

const createSoccerField = async (req, res) => {
  try {
    
    await body('name').notEmpty().isAlpha().run(req.body);
    await body('description').notEmpty().isAlphanumeric().run(req.body);
    await body('amountPlayers').notEmpty().isNumeric().run(req.body);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const soccerfield = await soccerfieldRepository.createSoccerField(req.body);

    res.json({ soccerfield });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteSoccerField = async (req, res) => {
  try {
    const soccerfield = soccerfieldRepository.deleteSoccerField(req.params.soccerfieldId)

    res.json({ soccerfield });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateSoccerField = async (req, res) => {
  try {
    await body('nombre').notEmpty().isAlphanumeric().run(req);
    await body('descripcion').notEmpty().isAlpha().run(req);
    await body('cantidadJugador').notEmpty().isNumeric().run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const soccerfield = await soccerfieldRepository.updateSoccerField(req.body, req.params.soccerfieldId);

    res.json({ soccerfield })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllSoccerFields,
  createSoccerField,
  deleteSoccerField,
  updateSoccerField,
  getSoccerFieldById,
}