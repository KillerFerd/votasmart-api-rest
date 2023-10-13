"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("jugador", [
      {
        nombre: "Luis",
        apellido: "García",
        anio_nacimiento: 1993,
        genero: 0,
        id_pais_origen: 78,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Diego",
        apellido: "Martínez",
        anio_nacimiento: 2001,
        genero: 0,
        id_pais_origen: 104,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Javier",
        apellido: "López",
        anio_nacimiento: 1995,
        genero: 0,
        id_pais_origen: 32,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Carlos",
        apellido: "Ramírez",
        anio_nacimiento: 1998,
        genero: 0,
        id_pais_origen: 17,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "José",
        apellido: "Fernández",
        anio_nacimiento: 2003,
        genero: 0,
        id_pais_origen: 53,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Juan",
        apellido: "Pérez",
        anio_nacimiento: 1997,
        genero: 0,
        id_pais_origen: 89,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Miguel",
        apellido: "Sánchez",
        anio_nacimiento: 1992,
        genero: 0,
        id_pais_origen: 45,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Andrés",
        apellido: "Gómez",
        anio_nacimiento: 2000,
        genero: 0,
        id_pais_origen: 134,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Alejandro",
        apellido: "Lara",
        anio_nacimiento: 1994,
        genero: 0,
        id_pais_origen: 29,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Jorge",
        apellido: "Martín",
        anio_nacimiento: 1996,
        genero: 0,
        id_pais_origen: 60,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Roberto",
        apellido: "Rodríguez",
        anio_nacimiento: 1991,
        genero: 0,
        id_pais_origen: 9,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Fernando",
        apellido: "Vargas",
        anio_nacimiento: 2002,
        genero: 0,
        id_pais_origen: 123,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Gustavo",
        apellido: "Díaz",
        anio_nacimiento: 1999,
        genero: 0,
        id_pais_origen: 76,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Ricardo",
        apellido: "Hernández",
        anio_nacimiento: 1993,
        genero: 0,
        id_pais_origen: 41,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Eduardo",
        apellido: "Torres",
        anio_nacimiento: 2004,
        genero: 0,
        id_pais_origen: 150,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Sergio",
        apellido: "López",
        anio_nacimiento: 1995,
        genero: 0,
        id_pais_origen: 12,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Pablo",
        apellido: "González",
        anio_nacimiento: 1997,
        genero: 0,
        id_pais_origen: 72,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Héctor",
        apellido: "Ramos",
        anio_nacimiento: 1990,
        genero: 0,
        id_pais_origen: 5,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Ángel",
        apellido: "Cruz",
        anio_nacimiento: 2003,
        genero: 0,
        id_pais_origen: 28,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Raúl",
        apellido: "Ortiz",
        anio_nacimiento: 1998,
        genero: 0,
        id_pais_origen: 86,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Daniel",
        apellido: "Reyes",
        anio_nacimiento: 1996,
        genero: 0,
        id_pais_origen: 37,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Mario",
        apellido: "Cabrera",
        anio_nacimiento: 1991,
        genero: 0,
        id_pais_origen: 57,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Antonio",
        apellido: "Mendoza",
        anio_nacimiento: 2001,
        genero: 0,
        id_pais_origen: 101,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Ernesto",
        apellido: "Silva",
        anio_nacimiento: 1992,
        genero: 0,
        id_pais_origen: 23,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Pedro",
        apellido: "Gómez",
        anio_nacimiento: 2000,
        genero: 0,
        id_pais_origen: 182,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Manuel",
        apellido: "Molina",
        anio_nacimiento: 1994,
        genero: 0,
        id_pais_origen: 39,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Víctor",
        apellido: "Ferrer",
        anio_nacimiento: 1999,
        genero: 0,
        id_pais_origen: 69,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        nombre: "Marcelo",
        apellido: "Navarro",
        anio_nacimiento: 1993,
        genero: 0,
        id_pais_origen: 111,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
    }    
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("jugador", null, {});
  },

  order: 3,
};
