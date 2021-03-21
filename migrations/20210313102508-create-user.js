"use strict";
const bcrypt = require("bcrypt");
const faker = require("faker");
faker.locale = "id_ID";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        defaultValue: 2,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    let data = [
      {
        name: "admin",
        username: "admin",
        role: 1,
        password: await bcrypt.hash("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (let i = 0; i < 10; i++) {
      const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
      const username = faker.internet.userName();
      const password = await bcrypt.hash("123", 10);
      const role = 2;
      const createdAt = new Date();
      const updatedAt = new Date();

      data.push({ name, username, password, role, createdAt, updatedAt });
    }
    await queryInterface.bulkInsert("users", data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
