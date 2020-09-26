'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameTable("adresses", "addresses");
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameTable("addresses", "adresses");
  }
};
