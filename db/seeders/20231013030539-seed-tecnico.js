"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tecnico", [
      {
        nombre: "Juan",
        apellido: "López",
        anio_nacimiento: 1993,
        genero: 0,
        id_cargo : 3,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Carlos",
        apellido: "González",
        anio_nacimiento: 1995,
        genero: 0,
        id_cargo : 6,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Luis",
        apellido: "Martínez",
        anio_nacimiento: 1990,
        genero: 0,
        id_cargo : 4,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "José",
        apellido: "Rodríguez",
        anio_nacimiento: 2002,
        genero: 0,
        id_cargo : 2,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Alejandro",
        apellido: "Pérez",
        anio_nacimiento: 1998,
        genero: 0,
        id_cargo : 5,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Miguel",
        apellido: "Hernández",
        anio_nacimiento: 1991,
        genero: 0,
        id_cargo : 1,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Javier",
        apellido: "Gómez",
        anio_nacimiento: 1994,
        genero: 0,
        id_cargo : 6,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Sergio",
        apellido: "Vargas",
        anio_nacimiento: 2003,
        genero: 0,
        id_cargo : 3,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Fernando",
        apellido: "Sánchez",
        anio_nacimiento: 1997,
        genero: 0,
        id_cargo : 4,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Ricardo",
        apellido: "Torres",
        anio_nacimiento: 2001,
        genero: 0,
        id_cargo : 5,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Adrián",
        apellido: "Jiménez",
        anio_nacimiento: 1992,
        genero: 0,
        id_cargo : 1,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Arturo",
        apellido: "Molina",
        anio_nacimiento: 1996,
        genero: 0,
        id_cargo : 2,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Eduardo",
        apellido: "Ramírez",
        anio_nacimiento: 2000,
        genero: 0,
        id_cargo : 4,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Roberto",
        apellido: "Ortega",
        anio_nacimiento: 1999,
        genero: 0,
        id_cargo : 3,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Héctor",
        apellido: "Castro",
        anio_nacimiento: 1990,
        genero: 0,
        id_cargo : 5,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Raúl",
        apellido: "Fernández",
        anio_nacimiento: 2004,
        genero: 0,
        id_cargo : 2,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Oscar",
        apellido: "Navarro",
        anio_nacimiento: 1994,
        genero: 0,
        id_cargo : 1,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Diego",
        apellido: "Reyes",
        anio_nacimiento: 2003,
        genero: 0,
        id_cargo : 6,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: "Andrés",
        apellido: "Lara",
        anio_nacimiento: 1995,
        genero: 0,
        id_cargo : 4,
        estado: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tecnico", null, {});
  },

  order: 4,
};