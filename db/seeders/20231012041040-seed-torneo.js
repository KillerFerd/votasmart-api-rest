'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('torneo', [
      {
        nombre: 'Torneo de prueba',
        fecha_inicio: '2023-11-12',
        fecha_fin: '2023-12-02',
        id_estado: 1, 
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'Torneo de prueba2',
        fecha_inicio: '2023-11-12',
        fecha_fin: '2023-12-02',
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
