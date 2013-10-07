//Module dependencies.
var mongoose = require('mongoose');
var userProfileSchema = require('../../schemas/account/userProfileSchema');

var UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;