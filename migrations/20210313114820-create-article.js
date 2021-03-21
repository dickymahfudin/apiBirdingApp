"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      birdSpeciesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "birdSpecies",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      publish: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
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
    // let data = [
    //   {
    //     userId: 1,
    //     birdSpeciesId: 1,
    //     image: "http://localhost:2001/seedImages/anis-kembang.jpeg",
    //     description:
    //       "Anis kembang memiliki ciri fisik yang khas. Bulu pada kepala hingga pundaknya berwarna coklat. Dari pundak hingga ekor berwarna hitam. Di bagian sayap,selain berwarna hitam, terdapat corak warna putih. Bagian dada hingga dubur berwarna putih dengan corak hitam. Ekornya berwarna hitam dengan corak putih. Kicauannya khas, merdu, dan nyaring.CARA BETERNAK ANIS KEMBANG Anis kembang (Zoothera interpres) merupakan burung yang biasa hidup di dataran rendah maupun dataran tinggi seperti di hutan, pegunungan, dan perbukitan yang memiliki banyak pohon.Anis kembang termasuk burung omnivora pemakan segala, baik hewani maupun nabati. Untuk Pakan hewani, anis kembang dapat diberi jangkrik, cacing, ulat bambu, ulat hongkong, kroto, ulat kandang, belang.Pakan nabatinya adalah buah-buahan. Meskipun demikian, agar nutrisi terpenuhi dengan baik, anis kembang juga perlu diberi voer khusus anis kembang yang diproduksi oleh pabrik.Klasifikasi ilmiah burung anis kembang:Kerajaan (kingdom): ",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ];
    // await queryInterface.bulkInsert("articles", data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("articles");
  },
};
