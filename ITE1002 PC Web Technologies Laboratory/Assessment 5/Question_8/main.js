function mongosearch(){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err,db){
        if(err){
            throw err;
        }
        var dbo = db.db("IPL_players");
        var query = {Name: name,IPL_Franchise: find_IPL_Franchise,Country: find_Country,bid_amount: find_Bid_Amount};
        dbo.collection("players").find(query).toArray(function(err,result){
            if(err){
                throw err;
            }
            console.log(result);
            db.close();
        });
    });
}
function search(){
    var name = document.getElementById("name").value;
    var IPL_Franchise = document.getElementById("IPL_Franchise").value;
    var Country = document.getElementById("Country").value;
    var Bid_Amount = document.getElementById("Bid_Amount").value;

    var find_IPL_Franchise;
    var find_Country;
    var find_Bid_Amount;

    if(IPL_Franchise==true){
        find_IPL_Franchise = 1;
    }
    else{
        find_IPL_Franchise = 0;
    }
    if(Country==true){
        find_Country = 1;
    }
    else{
        find_Country = 0;
    }
    if(Bid_Amount==true){
        find_Bid_Amount = 1;
    }
    else{
        find_Bid_Amount = 0;
    }

    mongosearch();
}
