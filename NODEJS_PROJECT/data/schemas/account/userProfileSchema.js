//Module dependencies.
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = new Schema({
	_id : Schema.Types.ObjectId,
	userName : { type: String, required: true},
	password: {type: String, required: true}
});