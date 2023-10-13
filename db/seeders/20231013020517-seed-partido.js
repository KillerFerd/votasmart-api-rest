'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('partido', [
      {
        id_jornada: 1,
        id_equipo_local: 1,
        id_equipo_visitante: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('partido', null, {});
  },

  order: 4 
};
