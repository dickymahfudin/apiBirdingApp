const { birdSpecies } = require("../../models");
module.exports = async (req, res) => {
  const { name } = req.body;

  const findSpecies = await birdSpecies.findOne({ where: { name } });

  if (findSpecies) {
    return res.status(409).json({
      status: "error",
      message: "birdSpecies already exists",
    });
  }

  const createdSpecies = await birdSpecies.create({ name });

  return res.status(201).json({
    status: "success",
    data: createdSpecies,
  });
};
