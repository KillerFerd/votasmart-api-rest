'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EstadoTorneo extends Model {
    static associate(models) {
      EstadoTorneo.hasMany(models.Torneo, { foreignKey: 'id_estado' });
    }
  }
  EstadoTorneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'EstadoTorneo',
    freezeTableName: true,
    tableName: 'estado_torneo',
    underscored: true
  });

  return EstadoTorneo;
};
