const { birdSpecies } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const findbirdSpecies = await birdSpecies.findByPk(id);

  if (!findbirdSpecies) {
    return res.status(409).json({
      status: "error",
      message: "birdSpecies not found",
    });
  }

  const updatebirdSpecies = await findbirdSpecies.update({ name });

  return res.status(201).json({
    status: "success",
    data: updatebirdSpecies,
  });
};
