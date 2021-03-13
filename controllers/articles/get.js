const { article } = require("../../models");

module.exports = async (req, res) => {
  const { id, userId, birdSpecies, description } = req.query;

  const tempId = !id ? {} : { id };
  const tempUserId = !userId ? {} : { userId };
  const tempBirdSpecies = !birdSpecies ? {} : { birdSpecies };
  const tempDescription = !description ? {} : { description };

  const where = {
    ...tempId,
    ...tempUserId,
    ...tempBirdSpecies,
    ...tempDescription,
  };

  const findArticle = await article.findAll({
    order: [["createdAt", "ASC"]],
    where,
  });
  return res.status(200).json({
    status: "success",
    data: findArticle,
  });
};
