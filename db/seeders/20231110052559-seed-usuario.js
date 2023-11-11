"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("usuario", [
      {
        usuario: "keren",
        contrasenia: "password",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        usuario: "josue",
        contrasenia: "password",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuario", null, {});
  },

  order: 1,
};
