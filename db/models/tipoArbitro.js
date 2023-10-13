'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoArbitro extends Model {
    static associate(models) {
      TipoArbitro.hasMany(models.ArbitroPartido, {foreignKey: "idTipo", field: "id_tipo", allowNull: false,});
    }
  }
  TipoArbitro.init({
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
    modelName: 'TipoArbitro',
    freezeTableName: true,
    tableName: 'tipo_arbitro',
    underscored: true
  });

  return TipoArbitro;
};
