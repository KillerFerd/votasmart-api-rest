'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoArbitroPartido extends Model {
    static associate(models) {
      // ...
    }
  }
  TipoArbitroPartido.init({
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
    modelName: 'TipoArbitroPartido',
    freezeTableName: true,
    tableName: 'tipo_arbitro_partido',
    underscored: true
  });

  return TipoArbitroPartido;
};
