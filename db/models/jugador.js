"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    static associate(models) {
      Jugador.belongsTo(models.Pais, {foreignKey: "idPaisOrigen", field: "id_pais_origen", allowNull: false,});
      Jugador.hasMany(models.JugadorPartido, {foreignKey: "idJugador", field: "id_jugador", allowNull: false,});
      Jugador.hasMany(models.JugadorEquipoTorneo, {foreignKey: "idJugador", field: "id_jugador", allowNull: false,});
    }
  }
  Jugador.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      anioNacimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "anio_nacimiento",
      },
      lugarNacimiento: {
        type: DataTypes.STRING(300),
        allowNull: true,
        field: "lugar_nacimiento",
      },
      nacionalidad: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      altura: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true,
      },
      peso: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true,
      },
      genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "genero",
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      correo: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      direccionResidencia: {
        type: DataTypes.STRING(300),
        allowNull: true,
        field: "direccion_residencia",
      },
      imagenJugador: {
        type: DataTypes.STRING(300),
        allowNull: false,
        field: "imagen_jugador",
        defaultValue: "default",
      },
      imagenIdentificacion: {
        type: DataTypes.STRING(300),
        allowNull: false,
        field: "imagen_identificacion",
        defaultValue: "default",
      },
    },
    {
      sequelize,
      modelName: "Jugador",
      freezeTableName: true,
      tableName: "jugador",
      underscored: true,
    }
  );

  return Jugador;
};
