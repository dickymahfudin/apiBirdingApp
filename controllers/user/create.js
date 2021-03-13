const bcrypt = require("bcrypt");
const { user } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { name, username, password, role } = req.body;

  const schema = {
    name: "string|empty:false",
    username: "string|empty:false",
    password: "string|min:2",
    role: "number|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const findUser = await user.findOne({
    where: { username },
  });

  if (findUser) {
    return res.status(409).json({
      status: "error",
      message: "Username already exists",
    });
  }

  const newPassword = await bcrypt.hash(password, 10);
  const data = { name, username, password: newPassword, role };

  const createdUser = await user.create(data);

  return res.status(201).json({
    status: "success",
    data: { id: createdUser.id, name, username, role: createdUser.role },
  });
};
