const { DataTypes } = require('sequelize');
const db = require('./index');
const Date = require("./date.js");

const BookingsDate = db.define("BookingsDate", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  }
});

BookingsDate.hasMany(Date);
Date.belongsTo(BookingsDate);

module.exports = BookingsDate;