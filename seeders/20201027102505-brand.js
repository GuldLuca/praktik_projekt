'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("brands", [{
      title: "Adidas",
      description: "This is adidas",
      imageUrl: "some image",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },
    {
      title:"Nike",
      description:"This is Nike",
      imageUrl: "another url",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    }
  ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("brands", null, {});
  }
};
