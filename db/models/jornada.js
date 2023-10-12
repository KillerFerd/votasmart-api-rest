'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jornada extends Model {
    static associate(models) {
      // ...
    }
  }
  Jornada.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_torneo'
    },
    idTipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_tipo'
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_inicio'
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_fin'
    }
  }, {
    sequelize,
    modelName: 'Jornada',
    freezeTableName: true,
    tableName: 'jornada',
    underscored: true
  });

  return Jornada;
};
