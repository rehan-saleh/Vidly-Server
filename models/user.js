const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = user => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin
    },
    config.jwtPrivateKey
  );
  return token;
};

const User = mongoose.model("User", userSchema);

exports.User = User;
