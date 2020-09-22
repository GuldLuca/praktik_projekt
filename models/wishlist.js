const Sequelize = require('sequelize');

const sequelize = require('./database');

const WishList = sequelize.define('wishList', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = WishList;