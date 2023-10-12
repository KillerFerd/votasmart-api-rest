'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Arbitro extends Model {
    static associate(models) {
      // ...
    }
  }
  Arbitro.init({
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
    apellido: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    anioNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'anio_nacimiento'
    },
    lugarNacimiento: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'lugar_nacimiento'
    },
    fifa: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    direccionResidencia: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'direccion_residencia'
    },
    altura: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    genero: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    imagenArbitro: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'imagen_arbitro'
    },
    imagenIdentificacion: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'imagen_identificacion'
    }
  }, {
    sequelize,
    modelName: 'Arbitro',
    freezeTableName: true,
    tableName: 'arbitro',
    underscored: true
  });

  return Arbitro;
};
