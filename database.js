const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('proy-fin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = {sequelize}