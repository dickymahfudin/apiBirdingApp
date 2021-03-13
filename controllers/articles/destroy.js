const { article } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroyArticle = await article.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroyArticle,
  });
};
