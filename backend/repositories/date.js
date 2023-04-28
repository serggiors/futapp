const Date = require('../models/date.js');

const getAllDates = async () => {
  const dates = await Date.findAll();

  return dates;
};

const createDate = async (dateData) => {
  try {
    const date = await Date.create(dateData);

    return date;
  } catch (error) {
    return error;
  }
};
module.exports = { getAllDates, createDate };
