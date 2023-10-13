'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipo_arbitro', [
      {
        descripcion: "Central",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: "Asistente 1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: "Asistente 2",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: "Cuarto",
        created_at: new Date(),
        updated_at: new Date()
      }                  
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipo_arbitro', null, {});
  },

  order: 4 
};
