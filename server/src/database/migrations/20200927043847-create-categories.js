'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.createTable("categories",{
          id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
          },
          name:{
            type:Sequelize.STRING(50),
            allowNull:false,
            
          },
          slug:{
            type:Sequelize.STRING(50),
            allowNull:false
          },
          description:{
            type:Sequelize.TEXT,
            allowNull:false
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false
          }  
      })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("categories");
  }
};