const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getUser);

router.get("/all", userController.getAllUsers);

router.post("/", userController.postUser);

module.exports = router;
