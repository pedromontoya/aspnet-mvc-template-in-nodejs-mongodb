//Module dependencies.
var express = require('express'),
    mongoose = require('mongoose'),
    http = require('http'),
    routeConfig = require("./configurations/route-config"),
    staticContentConfig = require("./configurations/static-content-config"),
    expressConfig = require("./configurations/express-config"),
    mongooseConfig = require("./configurations/mongoose-config");


var app = express(),
	appDir = __dirname,
	appProcess = process;


//Initialize routes
routeConfig.initialize(app);

//Configure static file access
staticContentConfig.initialize(app, express, appDir);

//Configure Express server environment
expressConfig.initialize(app, express, appDir, appProcess);

//Configure mongoose ODM
mongooseConfig.initialize(mongoose);

//Show errors in dev mode.
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Start server.
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
