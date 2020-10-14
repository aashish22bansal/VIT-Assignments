/*  Consider a client requests the server to view his profile, which is available in “19BIT0---info.html”. 
    Implement it using the Node.js file system module.
*/

// Importing all the required libraries.
var http = require('http');
var fs = require('fs');

// Creating a Server.
var server = http.createServer(function (req, resp) {
    // Creating a request for the file
    if (req.url === "/client_request_view_profile") {
        fs.readFile("19BIT0346info.html", function (error, pgResp) {
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
        resp.write('<h1>Product Manager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');