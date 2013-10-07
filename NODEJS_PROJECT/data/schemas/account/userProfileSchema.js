//Module dependencies.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userProfileSchema = new Schema({
	userName : { type: String, required: true, index: true},
	password: {type: String, required: true}
});

module.exports = userProfileSchema;