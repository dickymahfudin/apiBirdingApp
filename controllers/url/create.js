const { urldata } = require("../../models");

module.exports = async (req, res) => {
  const { name, url } = req.body;
  const findUser = await urldata.findOne({ where: { name } });
  console.log((name, url));
  if (findUser) {
    return res.status(409).json({
      status: "error",
      message: "Name already exists",
    });
  }

  const crete = await urldata.create({ name, url });

  return res.status(201).json({
    status: "success",
    data: crete,
  });
};
