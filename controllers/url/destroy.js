const { urldata } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroy = await urldata.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroy,
  });
};
