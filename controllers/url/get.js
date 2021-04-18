const { urldata } = require("../../models");

module.exports = async (req, res) => {
  const { id, name, url } = req.query;
  const tempId = !id ? {} : { id };
  const tempName = !name ? {} : { name };
  const tempUrl = !url ? {} : { url };

  const where = {
    ...tempId,
    ...tempName,
    ...tempUrl,
  };

  const find3d = await urldata.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: find3d,
  });
};
