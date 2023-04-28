const { DataTypes } = require('sequelize');
const db = require('./index');
const Role = require("./role.js");
const Bookings = require("./booking.js");
const People = require("./people.js");

const User = db.define("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: "No es un nombre valido",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "No es un email valido",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: DataTypes.ENUM("habilitado", "bloqueado"),
});

User.belongsTo(People);
People.belongsTo(User);

User.hasMany(Bookings);
Bookings.belongsTo(User);

User.belongsToMany(Role, { through: "RolesUsers" });
Role.belongsToMany(User, { through: "RolesUsers" });

module.exports = User;