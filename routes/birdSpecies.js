const express = require("express");
const router = express.Router();
const birdSpeciesController = require("../controllers/birdspecies");

router.post("/", birdSpeciesController.create);
router.put("/:id", birdSpeciesController.update);
router.delete("/:id", birdSpeciesController.destroy);
router.get("/", birdSpeciesController.get);

module.exports = router;
