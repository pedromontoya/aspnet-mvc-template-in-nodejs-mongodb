
/*
 * Configure account route responses.
 */

exports.list = function(req, res){
	res.render('home/index', { title: "Home", message:"Inser Message Here"});
};

exports.login = function(req, res){
	res.render('account/login', { title: "Log in", message:"Inser Message Here"});
};

exports.manage = function(req, res){
	res.render('account/manage', { title: "Manage", message:"Inser Message Here"});
};

exports.register = function(req, res){
	res.render('account/register', { title: "Register", message:"Inser Message Here"});
};