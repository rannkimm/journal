///////////////////// IMPORT ////////////////////
const { model } = require("mongoose");
const EntrySchema = require("./review");


////////////////////// SET UP MODELS //////////////////////
const Entry = model("entry", ReviewSchema);


module.exports = {
  Entry
}