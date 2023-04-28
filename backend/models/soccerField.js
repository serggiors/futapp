const { DataTypes } = require('sequelize');
const db = require('./index');
const Image = require("./image");
const SoccerFieldTime = require("./soccerFieldTime.js");

const SoccerField = db.define("SoccerField", {
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
  description: DataTypes.STRING,
  type: DataTypes.STRING,

  amountPlayers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// Agregar canchas predeterminadas
SoccerField.bulkCreate([
  { id:"1",name: 'futbol5', description: '5 jugadores', type:'futbol5', amountPlayers: '5'},
  { id:"2",name: 'futbol7', description: '7 jugadores', type:'futbol7', amountPlayers: '7'},
  { id:"3",name: 'futbol11', description: '11 jugadores', type:'futbol11', amountPlayers: '11'}
])
  .then(() => {
    console.log('Se agregaron canchas correctamente');
  })
  .catch(error => {
    console.error('Error al agregar canchas', error);
  });


SoccerField.hasMany(SoccerFieldTime);
SoccerFieldTime.belongsTo(SoccerField);

SoccerField.belongsTo(Image);
Image.belongsTo(SoccerField);

module.exports = SoccerField;