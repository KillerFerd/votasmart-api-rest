'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cambio extends Model {
    static associate(models) {
      // ...
    }
  }
  Cambio.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idPartido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_partido'
    },
    idJugadorEntra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_jugador_entra'
    },
    idJugadorSale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_jugador_sale'
    }
  }, {
    sequelize,
    modelName: 'Cambio',
    freezeTableName: true,
    tableName: 'cambio',
    underscored: true
  });

  return Cambio;
};
