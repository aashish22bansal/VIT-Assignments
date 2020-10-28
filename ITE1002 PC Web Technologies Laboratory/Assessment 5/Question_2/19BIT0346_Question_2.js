// Import events module
var events = require('events');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {
    // Creating a request for the file
    if (req.url === "/scoreboard") {
        fs.readFile("19BIT0346_Question_2_Scoreboard.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Scoreboard Manager</h1><br /><br />To Enter the score, please enter: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');

//resp('tfyhjiopkijhuygfcdxzsxfcghjkl;');