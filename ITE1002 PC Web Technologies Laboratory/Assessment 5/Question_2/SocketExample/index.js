var app = require('express')();
var http = require('http').Server(app);
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
http.listen(3000, function(){
    console.log('HTTP server started on port 3000');
});

var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('Client connection received');
    socket.emit('sendToClient', { hello: 'world' });
     
    socket.on('receivedFromClient', function (data) {
        console.log(data);
    });
});

var MySportsFeeds = require("mysportsfeeds-node");
 
var msf = new MySportsFeeds("1.2", true);
msf.authenticate("19BIT0346", "19BIT0346");
 
var today = new Date();
 
msf.getData('nhl', '2017-2018-regular', 'scoreboard', 'json', { 
    fordate: today.getFullYear() + 
        ('0' + parseInt(today.getMonth() + 1)).slice(-2) + 
        ('0' + today.getDate()).slice(-2),
    force: true
});

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var data = require('./data.js');
 
// Global variable to store the latest NHL results
var latestData;
 
// Load the NHL data for when client's first connect
// This will be updated every 10 minutes
data.getData().then((result) => { 
    latestData = result;
});
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
http.listen(3000, function(){
    console.log('HTTP server started on port 3000');
});
 
io.on('connection', function(socket){
    // when clients connect, send the latest data
    socket.emit('data', latestData);
});
 
// refresh data
setInterval(function() {
    data.getData().then((result) => { 
        // Update latest results for when new client's connect
        latestData = result; 
     
        // send it to all connected clients
        io.emit('data', result);
         
        console.log('Last updated: ' + new Date());
    });
}, 300000);

// Global variable to store the latest NHL results
var latestData;
 
// Load the NHL data for when client's first connect
// This will be updated every 10 minutes
data.getData().then((result) => { 
    latestData = result;
});

socket.on('data', function (data) {
    console.log(data);
     
    $('#data').html(tmpl.render(data.scoreboard.gameScore, helpers));
});