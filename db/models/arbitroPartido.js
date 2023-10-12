'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArbitroPartido extends Model {
    static associate(models) {
      // ...
    }
  }
  ArbitroPartido.init({
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
    idArbitro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_arbitro'
    },
    idTipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_tipo'
    }
  }, {
    sequelize,
    modelName: 'ArbitroPartido',
    freezeTableName: true,
    tableName: 'arbitro_partido',
    underscored: true
  });

  return ArbitroPartido;
};
