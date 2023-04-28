const { DataTypes } = require('sequelize');
const db = require('./index');

const Image = db.define("Image", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created: DataTypes.DATE,
});

module.exports = Image;