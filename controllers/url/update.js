const { urldata } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, url } = req.body;

  const find3d = await urldata.findByPk(id);

  if (!find3d) {
    return res.status(409).json({
      status: "error",
      message: "3D not found",
    });
  }

  const data = { name, url };
  const update3d = await find3d.update(data);

  return res.status(201).json({
    status: "success",
    data: update3d,
  });
};
