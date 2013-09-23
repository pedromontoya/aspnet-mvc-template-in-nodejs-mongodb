/*
 * Configure routers.
 */

//Module dependencies.
var homeRouter = require("../routers/homeRouter");
var accountRouter = require("../routers/accountRouter");
 

exports.initialize = function(app){
	//Configure home routes
	app.get('/', homeRouter.index);
	app.get('/about', homeRouter.about);
	app.get('/contacts', homeRouter.contacts);
	
	
	//Configure account routes
	app.get('/account/login', accountRouter.login);
	app.get('/account/manage', accountRouter.manage);
	app.get('/account/register', accountRouter.register);
};