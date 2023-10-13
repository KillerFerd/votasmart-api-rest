'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TecnicoEquipoTorneo extends Model {
    static associate(models) {
      TecnicoEquipoTorneo.belongsTo(models.Tecnico, {foreignKey: "idTecnico", field: "id_tecnico", allowNull: false,});
      TecnicoEquipoTorneo.belongsTo(models.EquipoTorneo, {foreignKey: "idEquipoTorneo", field: "id_equipo_torneo", allowNull: false,});
    }
  }
  TecnicoEquipoTorneo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'TecnicoEquipoTorneo',
    freezeTableName: true,
    tableName: 'tecnico_equipo_torneo',
    underscored: true
  });

  return TecnicoEquipoTorneo;
};
