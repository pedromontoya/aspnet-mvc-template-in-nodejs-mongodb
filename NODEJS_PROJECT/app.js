//Module dependencies.
var express = require('express');
var http = require('http');
var routeConfig = require("./app_start/route-config");
var staticContentConfig = require("./app_start/static-content-config");
var expressConfig = require("./app_start/express-config");

var app = express(),
	appDir = __dirname,
	appProcess = process;


//Initialize routes
routeConfig.initialize(app);

//Configure static file access
staticContentConfig.initialize(app, express, appDir);

//Configure Express server environment
expressConfig.initialize(app, express, appDir, appProcess);

//Show errors in dev mode.
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Start server.
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
