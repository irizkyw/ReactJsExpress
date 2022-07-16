'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Users', { 
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false
      },
      username : {
        type : Sequelize.CHAR(16),
        allowNull : false
      },
      email : {
        type : Sequelize.STRING(128),
        allowNull : false
      },
      password : {
        type : Sequelize.STRING,
        allowNull : false
      },
      roles_id : {
        type : Sequelize.INTEGER,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
