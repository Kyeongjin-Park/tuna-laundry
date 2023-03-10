'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laundry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laundry.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    category: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Laundry',
  });
  return Laundry;
};