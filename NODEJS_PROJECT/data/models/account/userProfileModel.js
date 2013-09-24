//Module dependencies.
var mongoose = require('mongoose'),
	userProfileSchema = require('../../schemas/account/userProfileSchema');

var UserProfile = new mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;