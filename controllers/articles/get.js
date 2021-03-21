const { article, user, birdSpecies } = require("../../models");

module.exports = async (req, res) => {
  const { id, userId, birdSpeciesId, description, publish } = req.query;
  const tempPublishB = publish === "true";
  const tempId = !id ? {} : { id };
  const tempUserId = !userId ? {} : { userId };
  const tempBirdSpecies = !birdSpeciesId ? {} : { birdSpeciesId };
  const tempDescription = !description ? {} : { description };
  const tempPublish = !tempPublishB ? {} : { publish: tempPublishB };
  console.log(tempPublish);
  const where = {
    ...tempId,
    ...tempUserId,
    ...tempBirdSpecies,
    ...tempDescription,
    ...tempPublish,
  };

  const findArticle = await article.findAll({
    order: [["updatedAt", "DESC"]],
    include: [
      {
        model: user,
        as: "user",
        attributes: {
          exclude: ["password"],
        },
      },
      {
        model: birdSpecies,
        as: "birdSpecies",
      },
    ],
    where,
  });
  return res.status(200).json({
    status: "success",
    data: findArticle,
  });
};
