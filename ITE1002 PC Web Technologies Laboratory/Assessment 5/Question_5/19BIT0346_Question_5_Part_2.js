var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + "/../public"));

app.delete('/register', function (req, res) 
{
    res.sendFile( __dirname + "/" + "index.html" );
});

app.delete('/process_post',urlencodedParser, function (req, res)
{
    // Prepare output in JSON format
    response = {       
        CompanyID:req.body.cid,
        name:req.body.cname,
        address:req.body.addr
    };
    MongoClient.connect('mongodb://localhost:27017/', function(err, db)
    {
        if(err){
            throw err;
        }
        console.log("Connected to Database");
        var dbo=db.db("mydb");
        //insert document in mongodb
        dbo.collection('customers').insertOne(response, function(err, result)
        {	
            if(err)
            {
                throw err;
            }
            console.log("1 document inserted in your mongodb database" ); 
        });
    });
    console.log(response); // display in node console window
    res.end(JSON.stringify(response));
}); // display in browser window

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s//register", host, port)
});
