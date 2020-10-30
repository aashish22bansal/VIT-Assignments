const events = require('events');
const scoreKeeper = new events.EventEmitter();

//initlal score
var score1 = 0;
var score2 = 0;

// function for scoring basket
function make_basket(team){
    if(team==="A"){
        score1 += 1;
    }
    else{
        score2 += 1;
    }
    console.log("Score for Team A is: " + score1);
    console.log("Score for team B is: " + score2);
    console.log("--------------------------\n\n\n");
}

scoreKeeper.on('make_basket',make_basket);

function scored(team){
    scoreKeeper.emit('make_basket',team);
}

scored("A");
scored("B");
scored("A");
scored("A");
scored("B");
scored("A");