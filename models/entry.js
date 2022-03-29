///////////////////// IMPORT ////////////////////
const { Schema } = require("mongoose");

//////////////////// CREATE GAME SCHEMA /////////////////////////

const Entry = new Schema(
  {
    date: { type: String, required: true },
    goal: { type: String, required: true },
    toDo: { type: Array, required: true},
    message: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = Entry;