const { DataTypes } = require("sequelize");
const db = require("./index.js");

const Role = db.define("Role", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  description: DataTypes.STRING,
});
// Agregar roles
Role.bulkCreate([
  { id:"1",description: 'admin' },
  { id:"2",description: 'superadmin' },
  { id:"3",description: 'user' }
])
  .then(() => {
    console.log('Se agregaron roles correctamente');
  })
  .catch(error => {
    console.error('Error al agregar los roles', error);
  });

module.exports = Role;