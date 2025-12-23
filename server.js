// import express
const express = require("express");
const cors = require("cors");


// create app
const app = express();
app.use(cors());
// sample data
const jokes = [
  {
    id: 1,
    title: "Programmer Humor",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 2,
    title: "Debugging Life",
    joke: "I told my computer I needed a break, and it said: 'No problem — I’ll freeze.'"
  },
  {
    id: 3,
    title: "Coffee & Code",
    joke: "Programmers don't need coffee, they just drink it to remind themselves they're human."
  },
  {
    id: 4,
    title: "Frontend Pain",
    joke: "Why did the CSS file go to therapy? Because it had too many class issues."
  },
  {
    id: 5,
    title: "React Reality",
    joke: "React developers don't get old — they just keep re-rendering."
  }
];

// home route
app.get("/", (req, res) => {
  res.send("Welcome to Express Beginner API");
});

// jokes route (GET request)
app.get("/jokes", (req, res) => {
  res.json(jokes);
});

// start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
