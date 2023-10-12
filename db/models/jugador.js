'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    static associate(models) {
      // ...
    }
  }
  Jugador.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idPaisOrigen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_pais_origen'
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
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'anio_nacimiento'
    },
    lugarNacimiento: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'lugar_nacimiento'
    },
    nacionalidad: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    altura: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    idGenero: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'id_genero'
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
    imagenJugador: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'imagen_jugador'
    },
    imagenIdentificacion: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'imagen_identificacion'
    }
  }, {
    sequelize,
    modelName: 'Jugador',
    freezeTableName: true,
    tableName: 'jugador',
    underscored: true
  });

  return Jugador;
};
