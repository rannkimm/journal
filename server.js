////////////// IMPORT ////////////////////
const express = require('express')
const cors = require("cors");
const db = require("./db");
const { Entry, User } = require("./models");
const logger = require("morgan");

//////// DEFINE VARIABLES /////////////
const PORT = process.env.PORT || 3001
const app = express()
////////// MIDDLEWARE /////////////////////

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

/////////// ROUTES //////////////////////
app.get("/", (req, res) => {
  res.send("This is root!");
});

app.get("/user", async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

app.get("/entry", async (req, res) => {
  const entries = await Entry.find({})
  res.json(entries)
})

app.post("/entry/new", async (req, res) => {
  const newEntry = await Entry.create(req.body);
  await res.json(newReview);
});




app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})