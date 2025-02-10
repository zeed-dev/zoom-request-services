'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      eventTime: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      serviceUnit: {
        type: Sequelize.STRING
      },
      picName: {
        type: Sequelize.STRING
      },
      picPhone: {
        type: Sequelize.STRING
      },
      zoomLink: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      rejectionReason: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
  }
};