var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});
var MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname+"/../public"));

app.get('/register',function(req,res){
    res.sendFile (__dirname+"/"+"info.html");
});

app.post('/process_post',urlencodedParser,function(req,res){
    response = {
        name: req.body.name,
        age: req.body.age,
        DoB: req.body.DoB,
        YoA: req.body.YoA
    };
    
    MongoClient.connect('mongodb://localhost:27017/',function(err,db){
        if(err){
            throw err;
        }
        console.log("Connected to Database!");
        var dbo = db.db("employee_db");
        /*dbo.createCollection("customers",function(err,res){
            if(err){
                throw err;
            }
            console.log("Collection Created!");
        });*/
        dbo.collection("customers").insertOne(response,function(err,res){
            if(err){
                throw err;
            }
            console.log("Documents inserted");
        });
    });
    console.log(response);
    //db.close();
    res.end(JSON.stringify(response));
});

app.post('/update_data',urlencodedParser,function(req,res){
    MongoClient.connect("mongodb://localhost:27017/",function(err,db){
        if(err){
            throw err;
        }
        var dbo = db.db("employee_db");
        var update_on_the_basis_of = req.body.update_on_the_basis_of;
        var response = {
            name: req.body.name,
            age: req.body.age,
            DoB: req.body.DoB,
            YoA: req.body.YoA
        }
        var myQuery = {};
        if(update_on_the_basis_of === "Name"){
            myQuery = { name: req.body.name }
        }
        else if(update_on_the_basis_of === "Age"){
            myQuery = { age: req.body.age }
        }
        else if(update_on_the_basis_of === "DoB"){
            myQuery = { DoB: req.body.DoB }
        }
        else if(update_on_the_basis_of === "YoA"){
            myQuery = { YoA: req.body.YoA }
        }
        var newValues = { $set: {
                name: response.name,
                age: response.age,
                DoB: response.DoB,
                YoA: response.YoA
            } 
        };
        dbo.collection("customers").updateOne(myQuery,newValues,function(err,res){
            if(err){
                throw err;
            }
            console.log("DATABASE DOCUMENT UPDATED!");
        });
        console.log(newValues);
        db.close();
    });
});

app.post('/document_entry_checking',urlencodedParser,function(req,res){
    var max = 4;
    MongoClient.connect("mongodb://localhost:27017/",function(err,db){
        if(err){
            throw err;
        }
        var dbo = db.db("employee_db");
        dbo.collection("customers").find().toArray(function(err,result){
            if(err){
                throw err;
            }
            if(result.length >= max){
                console.log("NO MORE DOCUMENTS ARE ALLOWED TO BE INSERTED!");
            }
            else{
                var num = max - result.length;
                console.log("WE CAN INSERT ONLY "+ num + " MORE DOCUMENTS INTO THE DATABASE");
            }
        });
        db.close();
    })
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s//register",host,port)
});