'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TecnicoEquipoTorneo extends Model {
    static associate(models) {
      // ...
    }
  }
  TecnicoEquipoTorneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idEquipoTorneo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_equipo_torneo'
    },
    idTecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_tecnico'
    },
    idCargo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_cargo'
    }
  }, {
    sequelize,
    modelName: 'TecnicoEquipoTorneo',
    freezeTableName: true,
    tableName: 'tecnico_equipo_torneo',
    underscored: true
  });

  return TecnicoEquipoTorneo;
};
