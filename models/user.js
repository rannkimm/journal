///////////////////// IMPORT ////////////////////
const { Schema } = require("mongoose");

//////////////////// CREATE GAME SCHEMA /////////////////////////

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = User;