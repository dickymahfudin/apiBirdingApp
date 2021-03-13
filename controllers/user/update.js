const bcrypt = require("bcrypt");
const { user } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, username, password, role } = req.body;

  const findUser = await user.findByPk(id);

  if (!findUser) {
    return res.status(409).json({
      status: "error",
      message: "Username not found",
    });
  }

  const newPassword = password && (await bcrypt.hash(password, 10));

  const data = { name, username, password: newPassword, role };

  const updateUser = await findUser.update(data);

  return res.status(201).json({
    status: "success",
    data: { id: updateUser.id, name, username, role: updateUser.role },
  });
};
