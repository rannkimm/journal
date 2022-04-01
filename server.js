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

app.get("/user", async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

app.post("/user/signin", async (req, res) => {
  const newUser = await User.create(req.body)
  await res.json(newUser)
})

app.get("/user/login/", async (req, res) => {
  const existUser = await User.findById({})
  res.json(existUser)
})

app.delete('/user/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.send('Deleted')
})


app.get("/entry", async (req, res) => {
  const entries = await Entry.find({})
  res.json(entries)
})

app.get("/entry/:user", async (req, res) => {
  const entries = await Entry.find({user:req.params.user})
  res.json(entries)
})

app.put("/entry/:id/update", async (req, res) => {
  console.log(req.body)
  const selected = await Entry.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
  res.json(selected)
})

app.delete("/entry/:id", async (req, res) => {
  await Entry.findByIdAndDelete(req.params.id)
  res.send(req.params.id)
})

app.post("/entry/new", async (req, res) => {
  const newEntry = await Entry.create(req.body);
  await res.json(newEntry);
});



app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})