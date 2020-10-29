var MongoClient = require('mongodb').MongoClient;

console.log(MongoClient);

var url = "mongodb://localhost:27017/IPL_players";

MongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    console.log("Database created!");
    db.close();
});