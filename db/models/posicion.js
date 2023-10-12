'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posicion extends Model {
    static associate(models) {
      // ...
    }
  }
  Posicion.init({
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
    modelName: 'Posicion',
    freezeTableName: true,
    tableName: 'posicion',
    underscored: true
  });

  return Posicion;
};
