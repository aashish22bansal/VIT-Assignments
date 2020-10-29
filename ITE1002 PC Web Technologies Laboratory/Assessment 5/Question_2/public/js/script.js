function start(){
    console.log("This is coming from script.js");

    // Import events module
    var events = require('events');

    // Create an eventEmitter object
    var scoreKeeper = new events.EventEmitter();

    // Program Variable declared and defined
    var score_valA = 0;
    var score_valB = 0;

    // Program Functions
    function add_1PointerA(){
        score_valA = score_valA+1;
        return score_valA;
    }



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
        document.getElementById("scoreA").innerHTML(add_1PointerA());
        console.log('data received successfully.');
    });

    // Fire up the connection event
    scoreKeeper.emit('connection');


    console.log("Program Ended.");
}
