var express = require('express');
var path = require('path');
var mongodb = require('mongodb');

const url = 'mongodb://localhost:27017/company_db';
//var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/company_db');
const client = new mongodb.MongoClient(url,{useUnifiedTopology: true});

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );