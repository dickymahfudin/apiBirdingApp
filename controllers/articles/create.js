const { user, article, birdSpecies } = require("../../models");
module.exports = async (req, res) => {
  const { userId, birdSpeciesId, description } = req.body;
  const findUser = await user.findByPk(userId);
  const findBirdSpecies = await birdSpecies.findByPk(birdSpeciesId);

  const url = process.env.BASE_URL;
  const image = req.file && `${url}/images/${req.file.filename}`;

  if (!findUser) {
    return res.status(404).json({
      status: "error",
      message: "User Not Found",
    });
  }
  if (!findBirdSpecies) {
    return res.status(404).json({
      status: "error",
      message: "BirdSpecies Not Found",
    });
  }

  const data = { userId, birdSpeciesId, image, description };
  const createdArticle = await article.create(data);

  return res.status(201).json({
    status: "success",
    data: createdArticle,
  });
};
