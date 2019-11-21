const express = require("express");
const app = express();
const config = require("./config/config.json");

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/dbConfig")();

const PORT = config.port;

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
