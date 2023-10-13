'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipo', [
      {        
        nombre: "Equipo1",
        anio_fundacion: 2000,
        estadio: "Estadio1",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo2",
        anio_fundacion: 2001,
        estadio: "Estadio2",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo3",
        anio_fundacion: 2002,
        estadio: "Estadio3",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo4",
        anio_fundacion: 2003,
        estadio: "Estadio4",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo5",
        anio_fundacion: 2004,
        estadio: "Estadio5",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo6",
        anio_fundacion: 2005,
        estadio: "Estadio6",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo7",
        anio_fundacion: 2006,
        estadio: "Estadio7",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo8",
        anio_fundacion: 2007,
        estadio: "Estadio8",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo9",
        anio_fundacion: 2008,
        estadio: "Estadio9",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo10",
        anio_fundacion: 2009,
        estadio: "Estadio10",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo11",
        anio_fundacion: 2010,
        estadio: "Estadio11",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {        
        nombre: "Equipo12",
        anio_fundacion: 2011,
        estadio: "Estadio12",
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipo', null, {});
  },

  order: 3 
};
