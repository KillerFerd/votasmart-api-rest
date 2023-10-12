'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Partido extends Model {
    static associate(models) {
      // ...
    }
  }
  Partido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idJornada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_jornada'
    },
    idEquipoLocal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_equipo_local'
    },
    idEquipoVisitante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_equipo_visitante'
    },
    idEquipoGanador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_equipo_ganador'
    },
    idEquipoPerdedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_equipo_perdedor'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    golesLocal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'goles_local'
    },
    golesVisitante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'goles_visitante'
    },
    empate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    puntosLocal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'puntos_local'
    },
    puntosVisitante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'puntos_visitante'
    }
  }, {
    sequelize,
    modelName: 'Partido',
    freezeTableName: true,
    tableName: 'partido',
    underscored: true
  });

  return Partido;
};
