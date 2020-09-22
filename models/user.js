const Sequelize = require('sequelize');

const sequelize = require('./database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
      type: Sequelize.STRING,
      allowNull: false
  },
  phonenumber: Sequelize.STRING,
  password: {
      type: Sequelize.STRING,
      allowNull: false
  }
});

module.exports = User;