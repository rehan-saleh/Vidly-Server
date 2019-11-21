const express = require("express");
const movies = require("../routes/movieRoutes");
const genres = require("../routes/genreRoutes");
const users = require("../routes/userRoutes");
const auth = require("../routes/authRoutes");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/movies", movies);
  app.use("/api/genres", genres);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
