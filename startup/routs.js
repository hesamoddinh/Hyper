const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const passport = require("passport");
require("express-async-errors");
const randToken = require("rand-token");

const codes = require("../routes/codes");

module.exports = async function(app) {
  // CORS Middleware
  app.use(cors());

  // Set Static Folder
  app.use(express.static(path.join(__dirname, "/../public")));
  app.use(express.static(path.join(__dirname, "/../uploads")));

  // Body Parser Middleware
  app.use(bodyParser.json());

  // Passport Middleware
  app.use(passport.initialize());
  app.use(passport.session());

  require("../middlewares/passport")(passport);

  app.use("/codes", codes);
};
