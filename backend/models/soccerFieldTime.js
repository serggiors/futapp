const { DataTypes } = require('sequelize');
const db = require('./index');

const SoccerFieldTime = db.define("SoccerFieldTime", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  time: DataTypes.TIME,
  status: DataTypes.ENUM("habilitado", "bloqueado"),
});

module.exports = SoccerFieldTime;