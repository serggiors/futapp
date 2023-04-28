const dateRepository = require('../repositories/date');
const { body, validationResult } = require('express-validator');

const getAllDates = async (req, res) => {
  const dates = await dateRepository.getAllDates();

  res.status(200).json({ dates });
};

const createDate = async (req, res) => {
  try {
    await body('time').notEmpty().run(req);
    await body('SoccerFieldId').notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const date = await dateRepository.createDate(req.body);

    res.json({ date });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
module.exports = { getAllDates, createDate };
