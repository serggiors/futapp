const express = require('express');

const {
  getAllAvailableTimes,
  getAllAvailableTimesBySoccerField,
} = require('../controllers/availableTime');

const availableTimeRoutes = express.Router();

availableTimeRoutes.get('/', getAllAvailableTimes);
availableTimeRoutes.get('/:soccerFieldId', getAllAvailableTimesBySoccerField);
// availableTimeRoutes.post("/create/", createdate);
// availableTimeRoutes.put("/:dateId", updatedate);
// availableTimeRoutes.delete("/:dateId", deletedate);

module.exports = availableTimeRoutes;
