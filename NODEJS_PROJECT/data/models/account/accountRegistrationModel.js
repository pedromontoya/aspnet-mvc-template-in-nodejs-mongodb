
var UserProfile = require('./userProfileModel');


var AccountRegistrationModel = function(){
		this.title = "Register";
		this.message = "Insert Message Here";
		this.user = new UserProfile();
	};

	module.exports = AccountRegistrationModel;