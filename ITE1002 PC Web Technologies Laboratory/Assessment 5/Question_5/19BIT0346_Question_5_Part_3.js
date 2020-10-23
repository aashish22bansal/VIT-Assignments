var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + "/../public"));

app.post('/register', function (req, res) 
{
    if(req.type=='GET')
	{
		console.log("\nThis is a GET Request.\n");
	}
	else if(req.type=='POST')
	{
		console.log("\nThis is a POST Request.\n");
	}
	else if(req.type=='PUT')
	{
		console.log("\nThis is a PUT Request.\n");
	}
	else if(req.type=='ALL')
	{
		console.log("\nThis is a ALL Request.\n");
	}
	else if(req.type=='DELETE')
	{
		console.log("\nThis is a DELETE Request.\n");
	}
	else if(req.type=='OPTION')
	{
		console.log("\nThis is a OPTION Request.\n");
	}
	res.sendFile( __dirname + "/" + "index.html" );
});

app.post('/process_post',urlencodedParser, function (req, res)
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
