'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jornada extends Model {
    static associate(models) {
      Jornada.belongsTo(models.Torneo, { foreignKey: 'idTorneo', field: 'id_torneo', allowNull: false });
      Jornada.belongsTo(models.TipoJornada, { foreignKey: 'idTipo', field: 'id_tipo', allowNull: false });
      Jornada.hasMany(models.Partido, { foreignKey: 'idJornada', field: 'id_jornada', allowNull: false });
    }
  }
  Jornada.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
