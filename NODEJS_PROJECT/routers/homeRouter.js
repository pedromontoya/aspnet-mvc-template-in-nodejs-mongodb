
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home/index', { title: "Home", message:"Inser Message Here"});
};

exports.about = function(req, res){
  res.render('home/about', { title: "About", message:"Inser Message Here"});
};

exports.contacts = function(req, res){
  res.render('home/contacts', { title: "Contacts", message:"Inser Message Here"});
};