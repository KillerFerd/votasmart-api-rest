'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.bulkInsert('estado_torneo', [
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
      ])
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('estado_torneo', null, {})
  }
};