////////////// IMPORT ////////////////

const mongoose = require("mongoose");
require('dotenv').config() 

////////////// USE MONGOOSE TO CONNECT TO MONGODB //////////////////////
let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb+srv://rannio:Abbie082093@cluster0.a89fq.mongodb.net/journalDatabase?retryWrites=true&w=majority'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;