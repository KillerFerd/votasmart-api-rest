"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("equipo_torneo", [
        {
          id_equipo: 1,
          id_torneo: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("equipo_torneo", null, {});
  },

  order: 4,
};