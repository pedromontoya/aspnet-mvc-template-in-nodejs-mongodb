/*
 * Configure routers.
 */

//Module dependencies.
var homeRouter = require("../routers/homeRouter");
var accountRouter = require("../routers/accountRouter");
 

exports.initialize = function(app){
	//Configure home routes
	app.get('/', homeRouter.index);
	
	
	//Configure account routes
	app.get('/users', accountRouter.list);
};