const { Genre } = require("../models/genre");

exports.getAllGenres = async (req, res) => {
  const genres = await Genre.find()
    .select("-__v")
    .sort("name");
  res.send(genres);
};

exports.postGenre = async (req, res) => {
  const genre = new Genre({
    name: req.body.name
  });
  await genre.save();

  res.send(genre);
};

exports.putGenre = async (req, res) => {
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    {
      name: genre.name
    },
    { new: true }
  );

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
};

exports.deleteGenre = async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
};

exports.getGenreById = async (req, res) => {
  const genre = await Genre.findById(req.params.id).select("-__v");

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
};
