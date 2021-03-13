const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);
router.post("/login", userController.login);
router.get("/", userController.get);

module.exports = router;
