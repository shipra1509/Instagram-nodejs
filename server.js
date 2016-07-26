// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with client-id
ig.use({
client_id: 'f4f63ffac030410a8b446055cdd723f5',
client_secret: 'c820a88faccb4bb9818f8ed332912fb0',
access_token: '1671867692.1677ed0.68c46e71f4cd4485b8d883f56d4a8a6d'
});

// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - popular images
app.get('/', function(req, res) {
// use the instagram package to get popular media
ig.media_popular(function(err, medias, remaining, limit) {
// render the home page and pass in the popular images
res.render('pages/index', { grams: medias });
});
});
// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');