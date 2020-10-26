/*// Importing Required Module
var http = require("http");
var fs = require("fs");

// Creating Server
http.createServer(function(request,response){
    // Send HTTP Header
    // HTTP Status: 200 - OK
    // Content Type: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    
    var data = fs.readFileSync('Login.html');

    console.log(data.toString());

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

console.log("Program Ended!");
*/
/*  Consider a client requests the server to view his profile, which is available in “19BIT0---info.html”. 
    Implement it using the Node.js file system module.
*/

// Importing all the required libraries.
var http = require('http');
var fs = require('fs');

// Creating a Server.
var server = http.createServer(function (req, resp) {
    // Creating a request for the file
    if (req.url === "/web") {
        fs.readFile("Home_Page.html", function (error, pgResp) {
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
        resp.write('<h1>Brace Yourself</h1><br /><br />To go to the COVID-19 Website, Please Enter: ' + req.url + 'web' +' in the URL');
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');