/*
 * Configure Express Web Server.
 */

 //Module dependencies.
 //load ejs-locals module to use layout feature removed after express 3.x
var ejsLocals = require('ejs-locals');
 
exports.initialize = function(app, express, appDir, appProcess){
	// all environments
	app.set('port', appProcess.env.PORT || 3000);
	app.set('views', appDir + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.engine('ejs', ejsLocals);
};