'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EquipoTorneo extends Model {
    static associate(models) {
      EquipoTorneo.belongsTo(models.Equipo, {foreignKey: 'idEquipo', field: 'id_equipo', allowNull: false });
      EquipoTorneo.belongsTo(models.Torneo, { foreignKey: 'idTorneo', field: 'id_torneo', allowNull: false });
      EquipoTorneo.hasMany(models.JugadorEquipoTorneo, {foreignKey: "idEquipoTorneo", field: "id_equipo_torneo", allowNull: false,});
      EquipoTorneo.hasMany(models.TecnicoEquipoTorneo, {foreignKey: "idEquipoTorneo", field: "id_equipo_torneo", allowNull: false,});
    }
  }
  EquipoTorneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
