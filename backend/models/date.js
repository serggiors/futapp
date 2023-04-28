const { DataTypes } = require('sequelize');
const db = require('./index');
const SoccerField = require('./soccerField.js');

const Date = db.define('Date', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  currently: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

SoccerField.hasMany(Date);
Date.belongsTo(SoccerField);

Date.createInsertarHorarioDisponibleProcedure = function () {
  return db
    .query(
      `
  CREATE PROCEDURE InsertarHorarioDisponible(
    IN horario_id INT,
    IN cancha_id INT,
    IN mes INT,
    IN anno INT
  )
  BEGIN
    DECLARE dia INT;
    DECLARE ultimo_dia INT;
    DECLARE fecha DATE;

    SET dia = 1;
    SET ultimo_dia = DAY(LAST_DAY(CONCAT(anno,'-',mes,'-01')));
    
    WHILE dia <= ultimo_dia DO
        SET fecha = CONCAT(anno,'-',mes,'-',dia);
        
        INSERT INTO AvailableTimes (SoccerFieldId, DateId, date, available)
        VALUES (cancha_id, horario_id, fecha, true);
        
        SET dia = dia + 1;
    END WHILE;
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

Date.createInsertarHorarioDisponibleProcedure();

Date.createInsertarHorarioTrigger = function () {
  return db
    .query(
      `
  CREATE TRIGGER trg_insertar_horario
  AFTER INSERT ON Dates
  FOR EACH ROW
  BEGIN
      DECLARE mes INT;
      DECLARE anno INT;
  
      SET mes = MONTH(NEW.date);
      SET anno = YEAR(NEW.date);
    
      CALL InsertarHorarioDisponible(NEW.id, NEW.SoccerFieldId, mes, anno);
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

Date.createInsertarHorarioTrigger();

module.exports = Date;
