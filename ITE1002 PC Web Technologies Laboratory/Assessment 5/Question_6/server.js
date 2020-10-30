var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
var session = require('express-session');

app.use(session({secret: "Shh, its a secret!"}));
app.use(express.static('public'));

app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

app.get('/', function (req, res) {
	if (req.session.rememberme=="yes")
	{
		res.redirect('/login?username=19BIT0346&passwords=123456');
	}
	else
	{
	res.sendFile( __dirname + "/" + "index.html" );
	}
});
	
app.get('/login', function (req, res) {

	res.cookie("Username", "19BIT0346");
	res.cookie("Password", "123456");
	username=req.query.username;
	passwords=req.query.passwords;
	remember=req.query.remember;
	if(req.cookies['Username']!=username || req.cookies['Password']!=passwords)
	{
		if(req.session.page_views)
		{
			req.session.page_views++;
		} 
		else 
		{
			req.session.page_views = 1;
		}
	}
	if(req.session.page_views>=4)
		var k="<h1>you are blocked</h1>";
	else
	{
		if(req.cookies['Username']==username && req.cookies['Password']==passwords)
		{
			if(remember=="yes")
			{
				req.session.rememberme="yes";
			}
			else
				req.session.rememberme="yes";
			var k="<h1>Welcome!</h1>";
		}
		else
			var k="<h1>Wrong!</h1>";
	}

	res.end(k);
});
var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});
