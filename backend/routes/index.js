const express = require('express');
const usersRoutes = require('./users');
const bookingsRoutes = require('./bookings');
const rolesRoutes = require('./roles');
const imagesRoutes = require('./images');
const peoplesRoutes = require('./peoples');
const soccerfieldsRoutes = require('./soccerfields');
const authorization = require('../middlewares/authorization');
const availableTimesRoutes = require('./availableTimes');
const datesRoutes = require('./dates');

const apiRoutes = express.Router();

apiRoutes.use('/users', usersRoutes);
apiRoutes.use('/bookings', authorization, bookingsRoutes);
apiRoutes.use('/roles', authorization, rolesRoutes);
apiRoutes.use('/images', authorization, imagesRoutes);
apiRoutes.use('/peoples', authorization, peoplesRoutes);
apiRoutes.use('/soccerfields', soccerfieldsRoutes);
apiRoutes.use('/availableTimes', availableTimesRoutes);
apiRoutes.use('/dates', datesRoutes);

module.exports = apiRoutes;
