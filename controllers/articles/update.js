const { article } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { userId, birdSpecies, description } = req.body;

  const findArticle = await article.findByPk(id);

  if (!findArticle) {
    return res.status(409).json({
      status: "error",
      message: "Article not found",
    });
  }

  const data = { userId, birdSpecies, description };
  const updateArticle = await findArticle.update(data);

  return res.status(201).json({
    status: "success",
    data: updateArticle,
  });
};
