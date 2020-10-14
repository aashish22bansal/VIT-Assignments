/*
Develop a small application for the Basketball scoreboard using Node.js event handling. Here, we have a 
scoreKeeper.on() event-listener listening for an event that would indicate a basket being made. Each scoring 
attempt is a call of the shoot_a_basket function. If the ball goes in the net (indicated by a true value for 
the shot), scoreKeeper.emit() is called, which alerts all event-listeners listening for the make_basket 
event announcement to run their callback function, and passes the value of the basket made. Display the 
scores of each team.
*/

