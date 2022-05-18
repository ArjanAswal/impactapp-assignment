'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      mark1: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      mark2: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      mark3: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      average: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
