'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("promotions", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expireIn: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      limite: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }  
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("promotions");
  }
};
