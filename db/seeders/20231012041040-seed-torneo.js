'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('torneo', [
      {
        nombre: 'Torneo de prueba',
        fecha_inicio: '2022-10-10',
        fecha_fin: '2022-11-10',
        id_estado: 1, 
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('torneo', null, {});
  },

  order: 2
};
