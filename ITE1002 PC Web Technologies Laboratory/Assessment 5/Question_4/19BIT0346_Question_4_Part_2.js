var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)
    {
        throw err;
    }
    var dbo = db.db("student_db");
    var sort_student = { Name: 1 };
    dbo.collection("collection_students").find().sort(sort_student).toArray(function(err,result){
        if(err)
        {
            throw err;
        }
        console.log(result);
        db.close();
    });
});