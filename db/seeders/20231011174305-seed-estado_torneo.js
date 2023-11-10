'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estado_torneo', [
      {
        descripcion: 'Por Iniciar',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'En Proceso',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Finalizado',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estado_torneo', null, {});
  },


  
  order: 1 
};
