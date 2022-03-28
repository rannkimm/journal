///////////////////// IMPORT ////////////////////
const { model } = require("mongoose");
const EntrySchema = require("./entry");
const UserSchema = require("./user")


////////////////////// SET UP MODELS //////////////////////
const Entry = model("entry", ReviewSchema);
const User = model("user", UserSchema);


module.exports = {
  Entry,
  User
}