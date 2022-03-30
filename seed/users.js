///////////////////// IMPORT ////////////////////////////////////

const db = require("../db");
const { User } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// CREATED REVIEW SEED TO ADD TO REVIEW COLLECTION /////////////////////
const main = async () => {
  const users = [
    {
        name: 'Ran Kim',
        email: 'ranfakeemail@gmail.com',
        password: '123123rankim'
    },
    {
        name: 'San Kim',
        email: 'sanfakeemail@gmail.com',
        password: '123123sankim'
    }
  ]
    
  await User.insertMany(users);
  console.log("Created some users!");
};
const run = async () => {
  await main();
  db.close();
};

run();
