var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/student_db";

MongoClient.connect(url,function(err,db)
{
    if(err)
    {
        throw err;
    }
    var dbo = db.db("student_db");
    var student_1 = {Name: "D", Age: 26, DOB: Date(1994,08,22,17,30), yearOfAdmission: 2019};
    var student_2 = {Name: "E", Age: 23, DOB: Date(1997,08,14,09,10), yearOfAdmission: 2019};
    var student_3 = {Name: "F", Age: 29, DOB: Date(1991,12,25,17,09), yearOfAdmission: 2014};
    var student_4 = {Name: "G", Age: 30, DOB: Date(1990,08,26,09,34), yearOfAdmission: 2019};
    var student_5 = {Name: "H", Age: 19, DOB: Date(2000,10,24,16,51), yearOfAdmission: 2019};
    var student_6 = {Name: "I", Age: 20, DOB: Date(2000,05,02,20,40), yearOfAdmission: 2015};
    dbo.collection("collection_students").insertOne(student_1,function(err,res){
        if(err)
        {
            throw err;
        }
        console.log("1 Student Inserted!");
        db.close();
    });
    dbo.collection("collection_students").insertOne(student_2,function(err,res){
        if(err)
        {
            throw err;
        }
        console.log("1 Student Inserted!");
        db.close();
    });
    dbo.collection("collection_students").insertOne(student_3,function(err,res){
        if(err)
        {
            throw err;
        }
        console.log("1 Student Inserted!");
        db.close();
    });
    dbo.collection("collection_students").insertOne(student_4,function(err,res){
        if(err)
        {
            throw err;
        }
        console.log("1 Student Inserted!");
        db.close();
    });
    dbo.collection("collection_students").insertOne(student_5,function(err,res){
        if(err)
        {
            throw err;
        }
        console.log("1 Student Inserted!");
        db.close();
    });
    dbo.collection("collection_students").insertOne(student_6,function(err,res){
        if(err)
        {
            throw err;
        }
        console.log("1 Student Inserted!");
        db.close();
    });
});