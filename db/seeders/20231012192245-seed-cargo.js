'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cargo', [
      {
        descripcion: 'Director Tecnico',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Entrenador',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Asistente',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Medio',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Staff',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Utilero',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cargo', null, {});
  },

  order: 2,
};
