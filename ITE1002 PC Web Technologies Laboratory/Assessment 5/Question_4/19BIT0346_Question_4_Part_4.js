var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)
    {
        throw err;
    }
    var dbo = db.db("student_db");
    dbo.collection("collection_students").find().limit(4).toArray(function(err,result){
        if(err)
        {
            throw err;
        }
        console.log("Limit the Output to the number specified.\n");
        console.log(result);
        db.close();
    });
});