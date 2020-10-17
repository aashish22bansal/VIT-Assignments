var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)
    {
        throw err;
    }
    var dbo = db.db("student_db");
    var old_student = {Name: "Kevin"};
    var new_student = {$set:{Name: "Kevin",Age: 25}};
    dbo.collection("student_db").updateOne(old_student,new_student,function(err,result){
        if(err)
        {
            throw err;
        }
        console.log("Student(s) Updated");
        db.close();
    });
});