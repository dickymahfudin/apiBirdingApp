const bcrypt = require("bcrypt");
const { user, article } = require("../../models");
module.exports = async (req, res) => {
  const { userId, birdSpecies, description } = req.body;
  const findUser = await user.findByPk(userId);
  const url = process.env.BASE_URL;
  console.log(url);
  const image = req.file && `${url}/images/${req.file.filename}`;

  if (!findUser) {
    return res.status(404).json({
      status: "error",
      message: "User Not Found",
    });
  }

  const data = { userId, birdSpecies, image, description };
  const createdArticle = await article.create(data);

  return res.status(201).json({
    status: "success",
    data: createdArticle,
  });
};
