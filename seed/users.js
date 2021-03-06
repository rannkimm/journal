///////////////////// IMPORT ////////////////////////////////////

const db = require("../db");
const { User } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// CREATED USER SEED TO ADD TO USER COLLECTION /////////////////////
const main = async () => {
  const users = [
    {
        username: 'rannio',
        name: 'Ran Kim',
        email: 'ranfakeemail@gmail.com',
        password: '123123rankim',
        confirmPassword: '123123rankim'
    },
    {
        username: 'sannkimm',
        name: 'San Kim',
        email: 'sanfakeemail@gmail.com',
        password: '123123sankim',
        confirmPassword: '123123sankim'
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
