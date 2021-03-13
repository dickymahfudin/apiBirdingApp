const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articles");

router.post("/", articlesController.create);
router.put("/:id", articlesController.update);
router.delete("/:id", articlesController.destroy);
router.get("/", articlesController.get);

module.exports = router;
