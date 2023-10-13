"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tipo_jugador_partido", [
      {
        descripcion: "Jugador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Suplente",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Lesionado",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Ausente",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tipo_jugador_partido", null, {});
  },

  order: 4,
};
