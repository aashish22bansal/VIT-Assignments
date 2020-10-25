var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/', function(err, db){	  
    if (err){
        throw err;
    }
	console.log("Connected to Database");
	dbo=db.db("company_db");
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/index', function (req, res) {
   res.sendFile( __dirname + "/public/" + "index.html" );})
   
app.post('/post-feedback', function (req, res) {
    var oldQuery={EmpID:req.body.old_employee_id,
        Vehicle_No:req.body.old_vehicle_no,
		Owner_Name:req.body.old_owner_name,
		Brand_Name:req.body.old_brand_name,
        Year_Of_Purchase:req.body.old_year_of_purchase};
        
	var response={$set:{EmpID:req.body.new_employee_id,
		Vehicle_No:req.body.new_vehicle_no,
		Owner_Name:req.body.new_owner_name,
		Brand_Name:req.body.new_brand_name,
		Year_Of_Purchase:req.body.new_year_of_purchase}};
       
		
		//insert document in mongodb
		dbo.collection('Employee_Details_Collection').updateOne(oldQuery, response, function(err, result) 	
			{	
                if (err){
                    throw err;
                }
				console.log("1 document updated in your mongodb database" ); 
				
			});
		
		console.log(response); // display in node console window
	res.end(JSON.stringify(response));}) // display in browser window
  

app.get('/view-feedbacks',  function(req, res) {
    
        dbo.collection('Employee_Details_Collection').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    
});

app.listen(3000,function(){console.log("Server started")});