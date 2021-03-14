"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(models.birdSpecies, {
        foreignKey: "birdSpeciesId",
        as: "birdSpecies",
      });
    }
  }
  article.init(
    {
      userId: DataTypes.INTEGER,
      birdSpeciesId: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "article",
    }
  );
  return article;
};
