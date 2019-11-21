const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const movieController = require("../controllers/movieController");

router.get("/:id", movieController.getMovieById);

router.get("/", movieController.getAllMovies);

router.post("/", auth, movieController.postMovie);

router.put("/:id", auth, movieController.putMovie);

router.delete("/:id", [auth, admin], movieController.deleteMovie);

module.exports = router;
