'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tecnico extends Model {
    static associate(models) {
      // ...
    }
  }
  Tecnico.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCargo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_cargo'
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    anioNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'anio_nacimiento'
    },
    genero: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tecnico',
    freezeTableName: true,
    tableName: 'tecnico',
    underscored: true
  });

  return Tecnico;
};
