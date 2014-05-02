function Models () {
	var mongoose = require('mongoose');
	var bcrypt = require('bcrypt-nodejs');  
	mongoose.connect('mongodb://localhost/GetMeToClassDb');

	var db = mongoose.connect; 
	//declare basic user schema below  
	var userSchema = mongoose.Schema({
		name: String,
		password: String
	});

	userSchema.methods.generateHash = function (password){
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};
	userSchema.methods.validPassword = function (password){
		return bcrypt.compareSync(password, this.local.password);
	};
	var User = mogosose.model('User', userSchema);		
} 
module.exports = Models;  
