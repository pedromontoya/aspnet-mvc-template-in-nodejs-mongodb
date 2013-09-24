
/*
 * Configure account route responses.
 */
	//var UserProfile = require('../data/models/account/userProfileModel');
 
 exports.initialize = function(app){
	app.get('/account/login',  function(req, res){
		res.render('account/login', { title: "Log in", message:"Inser Message Here"});
	});
	
	app.get('/account/manage', function(req, res){
		res.render('account/manage', { title: "Manage", message:"Inser Message Here"});
	});
	
	app.get('/account/register', function(req, res){
		res.render('account/register', { title: "Register", message:"Inser Message Here"});
	});
	
	app.post('/account/register', function(req, res){
		//var user = new UserProfile();
		user.userName = req.body.username;
		user.password = req.body.password;
	});
};
