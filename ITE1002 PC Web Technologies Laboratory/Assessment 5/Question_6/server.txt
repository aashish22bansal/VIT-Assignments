/*
 * Manage Session in Node.js and ExpressJS
*/
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
const app =	express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err,db){
	if(err){
		throw err;
	}
	
	app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
	app.use(bodyParser.json());      
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(__dirname + '/views'));

	var sess; // global session, NOT recommended

	router.get('/',(req,res) => {
		sess = req.session;
		if(sess.email) {
			return res.redirect('/admin');
		}
		res.sendFile('index.html');
	});

	router.post('/login',(req,res) => {
		sess = req.session;
		sess.email = req.body.email;
		sess.pass = req.body.pass;
		res.end('done');
	});

	router.get('/admin',(req,res) => {
		sess = req.session;
		var dbo = db.db("Question6_db");
		var query = {username: sess.email, password: sess.pass};
		var query_result = dbo.collection("Question_6_Collection").find(query).toArray(function(err,result){
			if(err){
				throw err;
			}
			console.log(result);
		});
		console.log(query_result);
		if(dbo.collection("Question_6_Collection").find(query))
		{
			//console.log(dbo.collection("Question_6_Collection").find(query));
			console.log(sess.email);
			console.log(sess.pass);
			if(sess.email && sess.pass) {
				res.write(`<h1>Hello ${sess.email} </h1><br>`);
				res.end('<a href='+'/logout'+'>Logout</a>');
			}
			else {
				res.write('<h1>Please login first.</h1>');
				res.end('<a href='+'/'+'>Login</a>');
			}
		}
		else
		{
			res.write('Credential Not found!\nUse Valid Credentaials.');
		}
	});

	router.get('/logout',(req,res) => {
		req.session.destroy((err) => {
			if(err) {
				return console.log(err);
			}
			res.redirect('/');
		});

	});

	app.use('/', router);
	/*
	var dbo = db.db("Question6_db");
	var query = {username: sess.email, password: sess.password};
	if(dbo.collection("Question_6_Collection").find(query))
	{
		if(sess.email) {
			res.write(`<h1>Hello ${sess.email} </h1><br>`);
			res.end('<a href='+'/logout'+'>Logout</a>');
		}
		else {
			res.write('<h1>Please login first.</h1>');
			res.end('<a href='+'/'+'>Login</a>');
		}
	}
	*/
});
/*
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

var sess; // global session, NOT recommended

router.get('/',(req,res) => {
	sess = req.session;
	if(sess.email) {
		return res.redirect('/admin');
	}
	res.sendFile('index.html');
});

router.post('/login',(req,res) => {
	sess = req.session;
	sess.email = req.body.email;
	res.end('done');
});

router.get('/admin',(req,res) => {
	sess = req.session;
	if(sess.email) {
		res.write(`<h1>Hello ${sess.email} </h1><br>`);
		res.end('<a href='+'/logout'+'>Logout</a>');
	}
	else {
		res.write('<h1>Please login first.</h1>');
		res.end('<a href='+'/'+'>Login</a>');
	}
});

router.get('/logout',(req,res) => {
	req.session.destroy((err) => {
		if(err) {
			return console.log(err);
		}
		res.redirect('/');
	});

});

app.use('/', router);
*/
app.listen(process.env.PORT || 3000,() => {
	console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
