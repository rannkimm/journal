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

app.get("/entry/:id", async (req, res) => {
  const one = await Entry.findById(req.params.id)
  console.log(req.body)
 console.log(selected)
  res.json(one)
})

app.put("/entry/:id/update", async (req, res) => {
  const selected = await Entry.findByIdAndUpdate({_id:req.params.id}, req.body.data, {new: true})
  console.log(req.body)
 console.log(selected)
  res.json(selected)
})

app.post("/entry/new", async (req, res) => {
  const newEntry = await Entry.create(req.body);
  await res.json(newEntry);
});





app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})