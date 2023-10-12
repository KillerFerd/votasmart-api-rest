'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoJornada extends Model {
    static associate(models) {
      TipoJornada.hasMany(models.Jornada);
    }
  }
  TipoJornada.init({
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
    modelName: 'TipoJornada',
    freezeTableName: true,
    tableName: 'tipo_jornada',
    underscored: true
  });

  return TipoJornada;
};
