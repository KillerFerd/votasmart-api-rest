'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Torneo extends Model {
    static associate(models) {
      Torneo.belongsTo(models.EstadoTorneo, { foreignKey: 'idEstado', field: 'id_estado', allowNull: false });
      Torneo.hasMany(models.Jornada);
    }
  }
  Torneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fecha_inicio'
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fecha_fin'
    },
    fechaInicioFaseEquipos: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_inicio_fase_equipos'
    },
    fechaFinFaseEquipos: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_fin_fase_equipos'
    },
    fechaInicioCuartosFinal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_inicio_cuartos_final'
    },
    fechaFinCuartosFinal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_fin_cuartos_final'
    },
    fechaInicioSemifinales: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_inicio_semifinales'
    },
    fechaFinSemifinales: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_fin_semifinales'
    },
    fechaInicioFinal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_inicio_final'
    },
    fechaFinFinal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_fin_final'
    }
  }, {
    sequelize,
    modelName: 'Torneo',
    freezeTableName: true,
    tableName: 'torneo',
    underscored: true
  });

  return Torneo;
};