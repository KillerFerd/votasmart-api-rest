'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoJugadorPartido extends Model {
    static associate(models) {
      // ...
    }
  }
  TipoJugadorPartido.init({
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
    modelName: 'TipoJugadorPartido',
    freezeTableName: true,
    tableName: 'tipo_jugador_partido',
    underscored: true
  });

  return TipoJugadorPartido;
};
