'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JugadorEquipoTorneo extends Model {
    static associate(models) {
      // ...
    }
  }
  JugadorEquipoTorneo.init({
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
    idJugador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_jugador'
    },
    idPosicion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_posicion'
    },
    idTipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_tipo'
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'JugadorEquipoTorneo',
    freezeTableName: true,
    tableName: 'jugador_equipo_torneo',
    underscored: true
  });

  return JugadorEquipoTorneo;
};