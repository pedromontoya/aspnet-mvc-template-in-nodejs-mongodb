/*
 * Configure routers.
 */

//Module dependencies.
var homeRouter = require("../routers/homeRouter");
var accountRouter = require("../routers/accountRouter");
 

exports.initialize = function(app){
	//Configure home routes
	homeRouter.initialize(app);
	
	//Configure account routes
	accountRouter.initialize(app);
};