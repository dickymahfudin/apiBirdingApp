const bcrypt = require("bcrypt");
const { user } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const schema = {
    username: "string|empty:false",
    password: "string|empty:false",
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
  if (!findUser) {
    return res.status(404).json({
      status: "error",
      message: "Wrong Username or Password",
    });
  }
  const isValidPassword = await bcrypt.compare(password, findUser.password);
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "Wrong Username or Password",
    });
  }
  return res.status(200).json({
    status: "success",
    data: {
      id: findUser.id,
      name: findUser.name,
      role: findUser.role,
      username,
    },
  });
};
