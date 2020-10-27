'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [{
      title: "Shirt",
      imageUrl: "shirt graphic",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },
    {
      title:"Pants",
      imageUrl: "pants graphic",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});

  }
};
