var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err){
		throw err;
	}
	var dbo = db.db("company_db");
	dbo.createCollection("Employee_Details_Collection", function(err, res) {
		if (err){
			throw err;
		}
		console.log("Collection created!");
	}); 
});