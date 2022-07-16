"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", { 
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false
      },
      name_roles : {
        type : Sequelize.STRING(64),
        allowNull : false
      },
      createdAt : {
        type : Sequelize.DATE,
        allowNull : false
      },
      updatedAt : {
        type : Sequelize.DATE,
        allowNull : false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Roles");
  },
};
