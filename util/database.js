
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mywebsite', 'root', 'password@0987', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
