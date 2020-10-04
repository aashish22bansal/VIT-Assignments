var http = require('http');
var fs = require("fs");
http.createServer(function(req,res){
    var path = "C:\\xampp\\htdocs\\VIT-Assignments\\ITE1002 PC Web Technologies Theory\\Digital Assignment 2\\Home_Page.html";

    fs.open(path, "w+", function(error, fd) {
    if (error) {
        console.error("open error:  " + error.message);
    } else {
        console.log("Successfully opened " + path);
    }
    });
}).listen(3000);