"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posicion", [
      {
        descripcion: "Portero",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Defensa",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Centrocampista",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        descripcion: "Delantero",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posicion", null, {});
  },

  order: 3,
};
