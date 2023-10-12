'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    static associate(models) {
      // ...
    }
  }
  Equipo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    anioFundacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'anio_fundacion'
    },
    direccionOficina: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'direccion_oficina'
    },
    correo: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    estadio: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    direccionEstadio: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'direccion_estadio'
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadTitulos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cantidad_titulos'
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'descripcion'
    },
    imagenEscudo: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_escudo'
    },
    imagenEquipo: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_equipo'
    },
    imagenUniforme: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_uniforme'
    }
  }, {
    sequelize,
    modelName: 'Equipo',
    freezeTableName: true,
    tableName: 'equipo',
    underscored: true
  });

  return Equipo;
};
