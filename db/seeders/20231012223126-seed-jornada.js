'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jornada', [
      {
        id_torneo: 1,
        id_tipo: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 2,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 3,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 4,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 5,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 6,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 7,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 8,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 9,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 10,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 11,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 12,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 13,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 14,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 15,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 16,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 17,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 18,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 19,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 20,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 21,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 22,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 23,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id_torneo: 1,
        id_tipo: 24,
        created_at: new Date(),
        updated_at: new Date()
    }   
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jornada', null, {});
  },

  order: 3 
};
