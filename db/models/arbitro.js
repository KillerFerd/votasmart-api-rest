'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Arbitro extends Model {
    static associate(models) {
      Arbitro.hasMany(models.ArbitroPartido, {foreignKey: "idArbitro", field: "id_arbitro", allowNull: false,});
    }
  }
  Arbitro.init({
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
    apellido: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    anioNacimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'anio_nacimiento'
    },
    lugarNacimiento: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'lugar_nacimiento'
    },
    fifa: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagenArbitro: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_arbitro',
      defaultValue: 'default'
    },
    imagenIdentificacion: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'imagen_identificacion',
      defaultValue: 'default'
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
