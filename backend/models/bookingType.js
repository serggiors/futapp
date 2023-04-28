const { DataTypes } = require('sequelize');
const db = require('./index');

const BookingsType = db.define("BookingsType", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  description: DataTypes.STRING,
});

module.exports = BookingsType;