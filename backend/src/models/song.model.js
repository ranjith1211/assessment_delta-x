const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    release_data: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String },
    artist: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Song = mongoose.model("song", songSchema);
module.exports = Song;
