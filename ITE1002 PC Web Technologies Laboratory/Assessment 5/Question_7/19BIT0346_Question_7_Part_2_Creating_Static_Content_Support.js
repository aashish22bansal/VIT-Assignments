var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );