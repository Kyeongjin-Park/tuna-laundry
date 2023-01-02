'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LaundryBaskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Users'
          },
          key:'id'
        },
        allowNull:false
      },
      laundryId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Laundries'
          },
          key:'id'
        },
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LaundryBaskets');
  }
};