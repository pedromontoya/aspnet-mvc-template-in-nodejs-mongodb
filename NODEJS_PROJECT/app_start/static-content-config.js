/*
 * Configure public routes for static content.
 */

 //Module dependencies.
var path = require('path');

exports.initialize = function(app, express, appDir){
	app.use("/content",express.static(path.join(appDir, 'public/content')));
	app.use("/images",express.static(path.join(appDir, 'public/images')));
	app.use("/scripts",express.static(path.join(appDir, 'public/scripts')));
};