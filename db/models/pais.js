'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pais extends Model {
    static associate(models) {
      Pais.hasMany(models.Jugador, {foreignKey: "idPaisOrigen", field: "id_pais_origen", allowNull: false,});
    }
  }
  Pais.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pais',
    freezeTableName: true,
    tableName: 'pais',
    underscored: true
  });

  return Pais;
};
