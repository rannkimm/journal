///////////////////// IMPORT ////////////////////
const { Schema } = require("mongoose");

//////////////////// CREATE GAME SCHEMA /////////////////////////

const Entry = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    date: { type: String, required: true },
    goals: { type: String, required: true },
    toDo: { type: Array, required: true},
    message: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = Entry;