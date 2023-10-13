'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JugadorEquipoTorneo extends Model {
    static associate(models) {
      JugadorEquipoTorneo.belongsTo(models.TipoJugador, {foreignKey: "idTipo", field: "id_tipo", allowNull: false,});
      JugadorEquipoTorneo.belongsTo(models.Posicion, {foreignKey: "idPosicion", field: "id_posicion", allowNull: false,});
      JugadorEquipoTorneo.belongsTo(models.Jugador, {foreignKey: "idJugador", field: "id_jugador", allowNull: false,});
      JugadorEquipoTorneo.belongsTo(models.EquipoTorneo, {foreignKey: "idEquipoTorneo", field: "id_equipo_torneo", allowNull: false,});
    }
  }
  JugadorEquipoTorneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'JugadorEquipoTorneo',
    freezeTableName: true,
    tableName: 'jugador_equipo_torneo',
    underscored: true
  });

  return JugadorEquipoTorneo;
};