const AvailableTime = require('../models/availableTime.js');
const Date = require('../models/date.js');

const getAllAvailableTimes = async () => {
  const availableTimes = await AvailableTime.findAll();

  return availableTimes;
};

const getAllAvailableTimesBySoccerField = async (soccerFieldId, fecha) => {
  let availableTimes;
  if (fecha) {
    availableTimes = await AvailableTime.findAll({
      where: {
        SoccerFieldId: soccerFieldId,
        available: true,
        date: fecha,
      },
      include: Date,
    });
  } else {
    availableTimes = await AvailableTime.findAll({
      where: {
        SoccerFieldId: soccerFieldId,
        available: true,
      },
    });
  }

  return availableTimes;
};

module.exports = { getAllAvailableTimes, getAllAvailableTimesBySoccerField };
