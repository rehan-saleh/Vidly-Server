const _ = require("lodash");
const { User } = require("../models/user");

exports.authenticate = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid Username");

  if (user.password !== req.body.password)
    return res.status(400).send("Invalid Password");

  const token = user.generateAuthToken(user);
  res.send(token);
};
