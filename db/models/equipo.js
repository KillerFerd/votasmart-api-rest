'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    static associate(models) {
      Equipo.hasMany(models.Partido, {foreignKey: 'idEquipoLocal', field: 'id_equipo_local', allowNull: false });
      Equipo.hasMany(models.Partido, {foreignKey: 'idEquipoVisitante', field: 'id_equipo_visitante', allowNull: false });
      Equipo.hasMany(models.EquipoTorneo, {foreignKey: 'idEquipo', field: 'id_equipo', allowNull: false });
    }
  }
  Equipo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: {
      type: DataTypes.INTEGER,
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
      allowNull: true,
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
      allowNull: true,
      field: 'direccion_estadio'
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      field: 'imagen_escudo',
      defaultValue: 'default'
    },
    imagenEquipo: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_equipo',
      defaultValue: 'default'
    },
    imagenUniforme: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_uniforme',
      defaultValue: 'default'
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
