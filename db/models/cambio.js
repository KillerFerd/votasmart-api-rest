'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cambio extends Model {
    static associate(models) {
      Cambio.belongsTo(models.Jugador, {foreignKey: "idJugadorEntra", field: "id_jugador_entra", allowNull: false,});
      Cambio.belongsTo(models.Jugador, {foreignKey: "idJugadorSale", field: "id_jugador_sale", allowNull: false,});
      Cambio.belongsTo(models.Partido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
    }
  }
  Cambio.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
