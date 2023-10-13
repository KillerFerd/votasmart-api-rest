'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JugadorPartido extends Model {
    static associate(models) {
      JugadorPartido.belongsTo(models.TipoJugadorPartido, {foreignKey: "idTipo", field: "id_tipo", allowNull: false,});
      JugadorPartido.belongsTo(models.Posicion, {foreignKey: "idPosicion", field: "id_posicion", allowNull: false,});
      JugadorPartido.belongsTo(models.Jugador, {foreignKey: "idJugador", field: "id_jugador", allowNull: false,});
      JugadorPartido.belongsTo(models.Partido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
    }
  }
  JugadorPartido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
