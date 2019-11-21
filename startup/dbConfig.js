const mongoose = require("mongoose");
const config = require("../config/config.json");

module.exports = function() {
  const db = config.db;
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));
};
