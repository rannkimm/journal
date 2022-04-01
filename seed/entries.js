///////////////////// IMPORT ////////////////////////////////////

const db = require("../db");
const { Entry } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// CREATED ENTRY SEED TO ADD TO ENTRY COLLECTION /////////////////////
const main = async () => {
  const entries = [
    {
        user: "6241e02a97293a990838b56a",
        date: '03/28/22',
        goal: 'Exercise!',
        toDo: ['complete homework', 'feed cats', 'laundry', 'cook dinner'],
        message: 'Today, I started my second project in the GA bootcamp. I am really glad I had the experience of working in a group last week because I feel a lot more confident about creating my own project. I am hoping that I will get to render the journal entries and get at least 2 of the CRUD operations to work.'
    },
    {
        user: "6241e02a97293a990838b56b",
        date: '03/29/22',
        goal: 'Exercise!',
        toDo: ['complete homework', 'complete Outcomes homework', 'feed cats', 'cook dinner'],
        message: 'Today is day 2 of project 2. I feel really good about what I was able to accomplish yesterday. I am hoping to get all CRUD operations working and hopefully reference the user id to the entries. I am really excited about the outcome of this project!'
    }
  ]
    
  await Entry.insertMany(entries);
  console.log("Created some entries!");
};
const run = async () => {
  await main();
  db.close();
};

run();
