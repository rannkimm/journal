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
app.use(express.static(`${__dirname}/client/build`))

/////////// ROUTES //////////////////////
app.get("/", (req, res) => {
  res.send("This is root!");
});


//////////// USER ROUTES ///////////

// FIND ALL USERS //
app.get("/user", async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// CREATE NEW USER //
app.post("/user/signin", async (req, res) => {
  const newUser = await User.create(req.body)
  await res.json(newUser)
})

// FIND LOGIN USER //
app.get("/user/login/:username/:password", async (req, res) => {
  const existUser = await User.find({username:req.params.username, password:req.params.password})
  res.json(existUser)
})

// DELETE USER //
app.delete('/user/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.send('Deleted')
})

//////////// ENTRY ROUTES ///////////

// FIND ALL ENTRIES //
app.get("/entry", async (req, res) => {
  const entries = await Entry.find({})
  res.json(entries)
})

// FIND ENTRIES FROM ONE USER //
app.get("/entry/:user", async (req, res) => {
  const entries = await Entry.find({user:req.params.user})
  res.json(entries)
})

// UPDATE ENTRY //
app.put("/entry/:id/update", async (req, res) => {
  console.log(req.body)
  const selected = await Entry.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
  res.json(selected)
})

// DELETE ENTRY //
app.delete("/entry/:id", async (req, res) => {
  await Entry.findByIdAndDelete(req.params.id)
  res.send(req.params.id)
})

// CREATE NEW ENTRY //
app.post("/entry/new", async (req, res) => {
  const newEntry = await Entry.create(req.body);
  await res.json(newEntry);
});


///////// ROUTE TO DEPLOY ///////////
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })


/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})