const Sequelize = require('sequelize');

const sequelize = require('./database');

const Fit = sequelize.define('fit', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = Fit;