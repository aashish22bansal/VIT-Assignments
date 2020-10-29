const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index"); // index refers to index.ejs
});



app.get("/", (req, res) => {
  res.send("<h1>Aashish Bansal 19BIT0346<br>Digital Assignment 5 Laboratory<br>Web Technologies<br>Question 2</h1>");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});

