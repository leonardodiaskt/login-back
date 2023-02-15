'use strict';

const types = ["Camiseta", "Tênis", "Moletom", "Calça", "Corta-vento", "Boné", "Bermuda"];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('produto',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.ENUM(types),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
