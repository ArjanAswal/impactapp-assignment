'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      mark1: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      mark2: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      mark3: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      average: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  },
};
