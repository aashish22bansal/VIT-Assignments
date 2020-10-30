var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/IPL_Players";

MongoClient.connect(url, function(err,db){
    if(err){
        throw err;
    }
    var dbo = db.db("IPL_Players");
    var IPL_Player_1 = {Name: "Virat Kohli", IPL_Franchise: "RCB", Country: "India", bid_amount: "17 Crore"};
    var IPL_Player_2 = {Name: "AB de Villiers", IPL_Franchise: "RCB", Country: "South Africa", bid_amount: "11 Crore"};
    var IPL_Player_3 = {Name: "Rohit Sharma", IPL_Franchise: "MI", Country: "India", bid_amount: "15 Crore"};
    var IPL_Player_4 = {Name: "Hardik Pandya", IPL_Franchise: "MI", Country: "India", bid_amount: "11 Crore"};
    var IPL_Player_5 = {Name: "MS Dhoni", IPL_Franchise: "CSK", Country: "India", bid_amount: "15 Crore"};
    var IPL_Player_6 = {Name: "Dwayne Bravo", IPL_Franchise: "CSK", Country: "West Indies", bid_amount: "6.40 Crore"};
    var IPL_Player_7 = {Name: "Shikhar Dhawan", IPL_Franchise: "DC", Country: "India", bid_amount: "5.20 Crore"};
    var IPL_Player_8 = {Name: "Shreyas Iyer", IPL_Franchise: "DC", Country: "India", bid_amount: "7 Crore"};
    var IPL_Player_9 = {Name: "Chris Gayle", IPL_Franchise: "KXIP", Country: "West Indies", bid_amount: "2 Crore"};
    var IPL_Player_10 = {Name: "KL Rahul", IPL_Franchise: "KXIP", Country: "India", bid_amount: "11 Crore"};
    dbo.collection("players").insertMany([IPL_Player_1,IPL_Player_2,IPL_Player_3,IPL_Player_4,IPL_Player_5,IPL_Player_6,IPL_Player_7,IPL_Player_8,IPL_Player_9,IPL_Player_10],function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Players Data Inserted");
        db.close();
    });
});