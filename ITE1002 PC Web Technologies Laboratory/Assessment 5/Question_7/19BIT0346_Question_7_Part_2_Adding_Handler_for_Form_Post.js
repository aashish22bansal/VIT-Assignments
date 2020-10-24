var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/company_db';
//var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/company_db');
const client = new mongodb.MongoClient(url,{useUnifiedTopology: true});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback', function (req, res) {
    client.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('Employee_Details_Collection').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );