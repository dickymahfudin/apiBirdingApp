const { user } = require("../../models");

module.exports = async (req, res) => {
  const { id, name, username, role } = req.query;
  const tempId = !id ? {} : { id };
  const tempName = !name ? {} : { name };
  const tempUsername = !username ? {} : { username };
  const temprole = !role ? {} : { role };
  const where = {
    ...tempId,
    ...tempName,
    ...tempUsername,
    ...temprole,
  };

  const findUser = await user.findAll({
    attributes: {
      exclude: ["password"],
    },
    order: [["updatedAt", "DESC"]],
    where,
  });
  return res.status(200).json({
    status: "success",
    data: findUser,
  });
};
