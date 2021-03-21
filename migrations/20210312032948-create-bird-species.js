"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("birdSpecies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
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

    const burungs = [
      "Anis Kembang",
      "Anis Merah",
      "Beo Enggano",
      "Beo Jawa",
      "Beo Nias",
      "Beo Sourthen",
      "Beo Srilanka",
      "Jalak Bali",
      "Jalak Suren",
      "Lovebird ",
    ];
    let data = [];
    burungs.forEach((burung) => {
      const createdAt = new Date();
      const updatedAt = new Date();
      data.push({ name: burung, createdAt, updatedAt });
    });

    await queryInterface.bulkInsert("birdSpecies", data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("birdSpecies");
  },
};
