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

// Create an eventEmitter object
            var scoreKeeper = new events.EventEmitter();

            // Create an event Handler function
            var shoot_a_basket = function connected(){
                console.log('Connection Successful!');

                // Fire up the data_received event
                scoreKeeper.emit('data_received');
            }

            // Binding the connection event with the handler
            scoreKeeper.on('connection',shoot_a_basket);

            // Bind the data_received event with the anonymous function
            scoreKeeper.on('data_received',function(){
                document.getElementById("1_pointerA").innerHTML(document.getElementById("1_pointerA").addEventListener("click",add_1PointerA));
                console.log('data received successfully.');
            });

            // Fire up the connection event
            scoreKeeper.emit('connection');

            console.log("Program Ended.");