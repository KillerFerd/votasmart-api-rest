'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArbitroPartido extends Model {
    static associate(models) {
      ArbitroPartido.belongsTo(models.TipoArbitro, {foreignKey: "idTipo", field: "id_tipo", allowNull: false,});
      ArbitroPartido.belongsTo(models.Arbitro, {foreignKey: "idArbitro", field: "id_arbitro", allowNull: false,});
      ArbitroPartido.belongsTo(models.Partido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
    }
  }
  ArbitroPartido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
