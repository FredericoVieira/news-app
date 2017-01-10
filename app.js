var app = require('./config/server');

var routeHome = require('./app/controller/home')(app);
var routeNews = require('./app/controller/news')(app);
var routeAddNews = require('./app/controller/news_add')(app);

app.listen(3000, function(){
	console.log("Express Server...");
});