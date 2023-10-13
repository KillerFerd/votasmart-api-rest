'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('arbitro', [
      {
        nombre: 'NombreArbitro1',
        apellido: 'ApellidoArbitro1',
        anio_nacimiento: 2000,
        genero: 0,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro2',
        apellido: 'ApellidoArbitro2',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro3',
        apellido: 'ApellidoArbitro3',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro4',
        apellido: 'ApellidoArbitro4',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro5',
        apellido: 'ApellidoArbitro5',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro6',
        apellido: 'ApellidoArbitro6',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro7',
        apellido: 'ApellidoArbitro7',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro8',
        apellido: 'ApellidoArbitro8',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'NombreArbitro9',
        apellido: 'ApellidoArbitro9',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },                                                                 
      {
        nombre: 'NombreArbitro10',
        apellido: 'ApellidoArbitro10',
        anio_nacimiento: 2000,
        genero: 2,
        fifa: 0,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      }               
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('arbitro', null, {});
  },

  order: 4
};
