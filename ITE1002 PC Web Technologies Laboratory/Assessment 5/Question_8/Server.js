var express=require('express');
var app=express();
var MongoClient=require('mongodb').MongoClient;
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.get("/login",function(req,res){
	response={
		choice:req.query.find_details,
		find:req.query.find
	};
	console.log(response);
	MongoClient.connect('mongodb://localhost:27017/',function(err,db){
	if(err) throw err;
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
var server = app.listen(8080, function () {
var host = server.address().address;
var port = server.address().port;
console.log("Example app listening at http://%s:%s//", host, port);
});
