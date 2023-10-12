'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {
    static associate(models) {
      // ...
    }
  }
  Cargo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cargo',
    freezeTableName: true,
    tableName: 'cargo',
    underscored: true
  });

  return Cargo;
};
