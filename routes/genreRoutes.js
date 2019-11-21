const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const genreController = require("../controllers/genreController");

router.get("/:id", genreController.getGenreById);

router.get("/", genreController.getAllGenres);

router.post("/", genreController.postGenre);

router.put("/:id", genreController.putGenre);

router.delete("/:id", [auth, admin], genreController.deleteGenre);

module.exports = router;
