'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoJugador extends Model {
    static associate(models) {
      // ...
    }
  }
  TipoJugador.init({
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
    modelName: 'TipoJugador',
    freezeTableName: true,
    tableName: 'tipo_jugador',
    underscored: true
  });

  return TipoJugador;
};
