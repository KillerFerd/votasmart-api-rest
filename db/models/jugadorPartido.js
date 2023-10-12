'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JugadorPartido extends Model {
    static associate(models) {
      // ...
    }
  }
  JugadorPartido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idJugador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_jugador'
    },
    idPartido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_partido'
    },
    idPosicion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_posicion'
    },
    idTipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_tipo'
    },
    goles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarjetasRojas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tarjetas_rojas'
    },
    tarjetasAmarillas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tarjetas_amarillas'
    }
  }, {
    sequelize,
    modelName: 'JugadorPartido',
    freezeTableName: true,
    tableName: 'jugador_partido',
    underscored: true
  });

  return JugadorPartido;
};
