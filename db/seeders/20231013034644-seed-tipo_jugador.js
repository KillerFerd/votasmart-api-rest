"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tipo_jugador", [
      {
        descripcion: "Jugador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Suplente",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tipo_jugador", null, {});
  },

  order: 4,
};
