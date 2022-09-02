const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const { register, login } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);

const artistController = require("./controllers/artist.controllers");
app.use("/artists", artistController);

const songController = require("./controllers/song.controller");
app.use("/song", songController);

module.exports = app;
