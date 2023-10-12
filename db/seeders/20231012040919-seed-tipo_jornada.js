'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipo_jornada', [
      {
        descripcion: 'Jornada 1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 2',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 3',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 4',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 5',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 6',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 7',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 8',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 9',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 10',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 11',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 12',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 13',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 14',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 15',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 16',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 17',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 18',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 20',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 21',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Jornada 22',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Cuartos de final',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Seminifinal',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descripcion: 'Final',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipo_jornada', null, {});
  },

  order: 2 
};
