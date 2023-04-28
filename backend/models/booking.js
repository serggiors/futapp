const { DataTypes } = require('sequelize');
const db = require('./index');
const BookingType = require('./bookingType.js');
const BookingStatus = require('./bookingStatus.js');
const SoccerField = require('./soccerField.js');
const Date = require('./date.js');

const Bookings = db.define('Bookings', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  cod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
Bookings.hasMany(BookingType);
BookingType.belongsTo(Bookings);

Bookings.hasMany(BookingStatus);
BookingStatus.belongsTo(Bookings);

SoccerField.hasMany(Bookings);
Bookings.belongsTo(SoccerField);

Date.hasMany(Bookings);
Bookings.belongsTo(Date);

Bookings.createActualizarHorarioDisponibleProcedure = function () {
  return db
    .query(
      `
      CREATE PROCEDURE actualizarDisponible(IN p_fecha DATE, IN p_horario_id INT, IN p_cancha_id INT)
      BEGIN
        UPDATE availabletimes
        SET available = false
        WHERE date = p_fecha
        AND SoccerFieldId = p_cancha_id
        AND DateId = p_horario_id;
      END
  `
    )
    .then((result) => {
      console.log('Stored procedure creado con éxito');
      return result;
    })
    .catch((err) => {
      console.error('Error al crear el stored procedure:', err);
    });
};

Bookings.createActualizarHorarioDisponibleProcedure();

Bookings.createActualizarDisponibilidadTrigger = function () {
  return db
    .query(
      `
      CREATE TRIGGER actualizarDisponible AFTER INSERT ON bookings
      FOR EACH ROW
      BEGIN
        CALL actualizarDisponible(NEW.fecha, NEW.DateId, NEW.SoccerFieldId);
      END
  `
    )
    .then((result) => {
      console.log('Trigger creado con éxito');
      return result;
    })
    .catch((err) => {
      console.error('Error al crear el trigger:', err);
    });
};

Bookings.createActualizarDisponibilidadTrigger();

module.exports = Bookings;
