
/*
 * GET home page.
 */
exports.initialize = function(app){
	app.get('/', function(req, res){
	  res.render('home/index', { title: "Home", message:"Inser Message Here"});
	});
	
	app.get('/about', function(req, res){
	  res.render('home/about', { title: "About", message:"Inser Message Here"});
	});
	
	app.get('/contacts', function(req, res){
	  res.render('home/contacts', { title: "Contacts", message:"Inser Message Here"});
	});
};
