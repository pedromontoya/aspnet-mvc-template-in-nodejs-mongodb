/*
 * Configure Express Web Server.
 */

var connectionString = 'mongodb://localhost/test';

exports.initialize = function(mongoose){
	//create connection
	mongoose.connect(connectionString);
};