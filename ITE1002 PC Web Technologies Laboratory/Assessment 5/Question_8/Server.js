var express = require("express");
var app = express();
var port = 4000;
var bodyParser = require('body-parser');
var MongoClient=require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/find_data", (req, res) => {
    response = 
	{
		choice:req.query.find_details,
		find:req.query.find
	};
	console.log(response);
	MongoClient.connect('mongodb://localhost:27017/',function(err,db){
		if(err)
		{
			throw err;
		}
		var dbo=db.db("IPL_db");
		
		if(response.choice=="IPL_Franchise")
		{
			dbo.collection('ipl_player_db').find({country:response.find},{projection:{_id:0}}).toArray(function(err,result){
				if(err) console.log(err);
				res.end(JSON.stringify(result));
				console.log(result);
			});
		}
		else if(response.choice=="bid")
		{
			dbo.collection('ipl_player_db').find({'bid':{$gte:Number(response.find)}},{projection:{_id:0}}).toArray(function(err,result){
				if(err) console.log(err);
				res.end(JSON.stringify(result));
				console.log(result);
			});
		}
		else
		{
			dbo.collection('ipl_player_db').find({name:response.find},{projection:{_id:0}}).toArray(function(err,result){
				if(err) console.log(err);
				res.end(JSON.stringify(result));
				console.log(result);
			});
		}
	});
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});