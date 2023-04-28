const sequelize = require("sequelize");
const config = require("../config")
const db = new sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
	host: config.DB_HOST,
	dialect: 'mysql' 
  });
  module.exports = db;