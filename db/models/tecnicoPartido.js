'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TecnicoPartido extends Model {
    static associate(models) {
      // ...
    }
  }
  TecnicoPartido.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idTecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_tecnico'
    },
    idPartido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_partido'
    },
    idCargo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_cargo'
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
