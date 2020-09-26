'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("users", "created_at", {
      type: Sequelize.DATE,
      allowNull: false
    });
    queryInterface.addColumn("users", "updated_at", {
      type: Sequelize.DATE,
      allowNull: false
    });

    return;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'created_at');
    queryInterface.removeColumn('users', 'updated_at');

    return;
  }
};
