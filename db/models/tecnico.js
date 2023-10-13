'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tecnico extends Model {
    static associate(models) {
      Tecnico.belongsTo(models.Cargo, {foreignKey: "idCargo", field: "id_cargo", allowNull: false,});
      Tecnico.hasMany(models.TecnicoPartido, {foreignKey: "idTecnico", field: "id_tecnico", allowNull: false,});
    }
  }
  Tecnico.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_cargo'
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    anioNacimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'anio_nacimiento'
    },
    genero: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tecnico',
    freezeTableName: true,
    tableName: 'tecnico',
    underscored: true
  });

  return Tecnico;
};
