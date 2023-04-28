const availableTimeRepository = require('../repositories/availableTime');

const getAllAvailableTimes = async (req, res) => {
  try {
    const availableTimes = await availableTimeRepository.getAllAvailableTimes();
    res.status(200).json({ availableTimes });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllAvailableTimesBySoccerField = async (req, res) => {
  try {
    const soccerFieldId = req.params.soccerFieldId;
    const fecha = req.body.fecha;
    let availableTimes;
    if (fecha) {
      availableTimes =
        await availableTimeRepository.getAllAvailableTimesBySoccerField(
          soccerFieldId,
          fecha
        );
    } else {
      availableTimes =
        await availableTimeRepository.getAllAvailableTimesBySoccerField(
          soccerFieldId
        );
    }
    res.status(200).json({ availableTimes });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getAllAvailableTimes, getAllAvailableTimesBySoccerField };
