const { DataTypes } = require('sequelize');
const db = require('./index.js');
const SoccerField = require('./soccerField.js');
const Date = require('./date.js');

const AvailableTime = db.define('AvailableTime', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

SoccerField.hasMany(AvailableTime);
AvailableTime.belongsTo(SoccerField);

Date.hasMany(AvailableTime);
AvailableTime.belongsTo(Date);

module.exports = AvailableTime;
