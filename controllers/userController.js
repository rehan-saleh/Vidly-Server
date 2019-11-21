const _ = require("lodash");
const { User } = require("../models/user");

exports.getUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("User not found.");

  res.send(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find()
    .select("-__v")
    .sort("name");
  res.send(users);
};

exports.postUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered.");

  user = new User(
    _.pick(req.body, ["name", "username", "password", "isAdmin"])
  );
  await user.save();

  const token = user.generateAuthToken(user);
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "username"], token));
};
