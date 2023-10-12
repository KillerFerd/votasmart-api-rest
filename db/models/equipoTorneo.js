'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EquipoTorneo extends Model {
    static associate(models) {
      // ...
    }
  }
  EquipoTorneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_torneo'
    },
    idEquipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_equipo'
    }
  }, {
    sequelize,
    modelName: 'EquipoTorneo',
    freezeTableName: true,
    tableName: 'equipo_torneo',
    underscored: true
  });

  return EquipoTorneo;
};
