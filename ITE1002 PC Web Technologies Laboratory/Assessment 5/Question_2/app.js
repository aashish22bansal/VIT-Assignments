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
    console.log('data received successfully.');
});

// Fire up the connection event
scoreKeeper.emit('connection');

console.log("Program Ended.");