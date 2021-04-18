const express = require("express");
const router = express.Router();
const Controller = require("../controllers/url");

router.post("/", Controller.create);
router.put("/:id", Controller.update);
router.delete("/:id", Controller.destroy);
router.get("/", Controller.get);

module.exports = router;
