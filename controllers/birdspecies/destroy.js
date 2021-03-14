const { birdSpecies } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroybirdSpecies = await birdSpecies.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroybirdSpecies,
  });
};
