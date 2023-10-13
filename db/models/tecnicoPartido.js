'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TecnicoPartido extends Model {
    static associate(models) {
      TecnicoPartido.belongsTo(models.Tecnico, {foreignKey: "idTecnico", field: "id_tecnico", allowNull: false,});
      TecnicoPartido.belongsTo(models.Partido, {foreignKey: "idPartido", field: "id_partido", allowNull: false,});
    }
  }
  TecnicoPartido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    modelName: 'TecnicoPartido',
    freezeTableName: true,
    tableName: 'tecnico_partido',
    underscored: true
  });

  return TecnicoPartido;
};
