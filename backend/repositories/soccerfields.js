const SoccerField = require("../models/soccerField.js");

const getAllSoccerFields = async () => {
  const soccerfields = await SoccerField.findAll();

  return soccerfields;
};

const getSoccerFieldById = async (soccerfieldId) => {
  const soccerfield = await SoccerField.findByPk(soccerfieldId);

  return soccerfield;
};

const createSoccerField = async (soccerfieldData) => {
  try {
    const soccerfield = await SoccerField.create(soccerfieldData);

    return soccerfield;
  } catch (error) {
    return error;
  }
};

const deleteSoccerField = async (soccerfieldId) => {
  try {
    const soccerfield = await SoccerField.destroy({
      where: {
        id: soccerfieldId,
      },
    });

    return soccerfield;
  } catch (error) {
    return error;
  }
};

const updateSoccerField = async (soccerfieldData, soccerfieldId) => {
  try {
    await SoccerField.update(soccerfieldData, {
      where: {
        id: soccerfieldId,
      },
    });

    const soccerfield = await SoccerField.findByPk(soccerfieldId);

    return soccerfield;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSoccerFields,
  createSoccerField,
  deleteSoccerField,
  updateSoccerField,
  getSoccerFieldById,
};
