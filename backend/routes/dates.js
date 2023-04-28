const express = require('express');

const { getAllDates, createDate } = require('../controllers/date');

const dateRoutes = express.Router();

dateRoutes.get('/', getAllDates);
// dateRoutes.get("/:dateId", getdateById);
dateRoutes.post('/', createDate);
// dateRoutes.put("/:dateId", updatedate);
// dateRoutes.delete("/:dateId", deletedate);

module.exports = dateRoutes;
