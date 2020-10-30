var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
    if(err){
        throw err;
    }
    var dbo = db.db("IPL_db");
    var IPL_Player_1 = {Name: "Virat Kohli", IPL_Franchise: "RCB", Country: "India", bid_amount: "17 Crore"};
    var IPL_Player_2 = {Name: "AB de Villiers", IPL_Franchise: "RCB", Country: "South Africa", bid_amount: "11 Crore"};
    var IPL_Player_3 = {Name: "Rohit Sharma", IPL_Franchise: "MI", Country: "India", bid_amount: "15 Crore"};
    var IPL_Player_4 = {Name: "Hardik Pandya", IPL_Franchise: "MI", Country: "India", bid_amount: "11 Crore"};
    var IPL_Player_5 = {Name: "MS Dhoni", IPL_Franchise: "CSK", Country: "India", bid_amount: "15 Crore"};
    var IPL_Player_6 = {Name: "Dwayne Bravo", IPL_Franchise: "CSK", Country: "West Indies", bid_amount: "6.40 Crore"};
    var IPL_Player_7 = {Name: "Shikhar Dhawan", IPL_Franchise: "DC", Country: "India", bid_amount: "5.20 Crore"};
    var IPL_Player_8 = {Name: "Shreyas Iyer", IPL_Franchise: "DC", Country: "India", bid_amount: "7 Crore"};
    var IPL_Player_9 = {Name: "Chris Gayle", IPL_Franchise: "KXIP", Country: "West Indies", bid_amount: "2 Crore"};
    var IPL_Player_10 ={Name: "KL Rahul", IPL_Franchise: "KXIP", Country: "India", bid_amount: "11 Crore"};
    dbo.collection("ipl_player_db").insertOne(IPL_Player_1,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_2,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_3,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_4,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_5,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_6,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_7,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_8,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_9,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    dbo.collection("ipl_player_db").insertOne(IPL_Player_10,function(err,res){
        if(err){
            throw err;
        }
        console.log("IPL Player Data Inserted");
    });
    console.log("Data Inserting Completed");
});