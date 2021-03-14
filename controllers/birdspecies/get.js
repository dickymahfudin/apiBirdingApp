const { birdSpecies } = require("../../models");

module.exports = async (req, res) => {
  const { id, name } = req.query;

  const tempId = !id ? {} : { id };
  const tempname = !name ? {} : { name };

  const where = { ...tempId, ...tempname };

  const findbirdSpecies = await birdSpecies.findAll({
    order: [["updatedAt", "DESC"]],
    where,
  });

  return res.status(200).json({
    status: "success",
    data: findbirdSpecies,
  });
};
