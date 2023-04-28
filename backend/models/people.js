const { DataTypes } = require('sequelize');
const db = require('./index');
const Image = require("./image");

const People = db.define("People", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DNI: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cuil: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
People.belongsTo(Image);
Image.belongsTo(People);

module.exports = People;