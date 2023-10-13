'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Partido extends Model {
    static associate(models) {
      Partido.belongsTo(models.Jornada, { foreignKey: 'idJornada', field: 'id_jornada', allowNull: false });
      Partido.belongsTo(models.Equipo, { foreignKey: 'idEquipoLocal', field: 'id_equipo_local', allowNull: false });
      Partido.belongsTo(models.Equipo, { foreignKey: 'idEquipoVisitante', field: 'id_equipo_visitante', allowNull: false });
      Partido.hasMany(models.ArbitroPartido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
      Partido.hasMany(models.JugadorPartido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
      Partido.hasMany(models.TecnicoPartido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
      Partido.hasMany(models.Cambio, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
    }
  }
  Partido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.INTEGER,
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
