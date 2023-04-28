const { DataTypes } = require('sequelize');
const db = require('./index');

const BookingsStatus = db.define("BookingsStatus", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  description: DataTypes.STRING,
});

module.exports = BookingsStatus;