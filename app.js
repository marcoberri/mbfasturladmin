/**
 * Module dependencies.
 */

var fs = require('fs');
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var cluster = require('cluster');
var minify = require('express-minify');

var routes = require('./app/routes/');
//var config = require('./app/config/');
var user = require('./app/routes/user');
var stats = require('./app/routes/stats');
var urls = require('./app/routes/urls');
var logs = require('./app/routes/logs');
var system = require('./app/routes/system');


var arguments = process.argv.splice(2);

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
 })

mongoose.connect('mongodb://localhost/FastUrl');

var db = mongoose.connection;
db.on('error', 
      console.error.bind(console, 'connection error:')
      );
      
db.once('open', function callback () {
    console.log('db is opened');
 });



var app = express();

app.set('port', process.env.PORT || arguments[0] || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());


var MongoStore = require("connect-mongostore")(express);

var storeSession = new MongoStore({
    collection: 'App.Sessions',
    mongooseConnection: db
});

app.use(express.session({
    key:'sid',
    secret: 'XXDEFSDFREEWFSDFSDVCSDF',
    store:storeSession
}));


app.use(app.router);

app.use(minify());
app.use(express.static(path.join(__dirname, '/public')));

//todo da spostare in un controller
function checkAuth(req, res, next) {
   if(!req.session.logged || req.session.logged == false){
      res.redirect('/');
   }else{
	next();	
   }
}

function loggin(req, res, next){
	var AppLog = mongoose.model('AppLog');
	var s = JSON.stringify(req.session);
	var applog = new AppLog({ url: req.url, session: s , isWorker:cluster.isWorker});

	applog.save(function (err) {
		if (err) 
			return handleError(err);
		next();
	});
};


app.use(function(err, req, res, next){
  console.error(err.stack);
    res.send(500, 'Something broke!');
});
    
app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
   
app.configure('production', function() {
  app.use(express.errorHandler());
});
     
app.get('/', routes.index);
app.get('/home', checkAuth, routes.home);
app.post('/login', routes.login);
app.get('/logout', checkAuth,routes.logout);

app.get('/api/urls',checkAuth,urls.index);
app.get('/api/logs',checkAuth,logs.index);


app.get('/api/stats/url/count',checkAuth,stats.urlCount);
app.get('/api/stats/url/browser/count',checkAuth,stats.urlBrowserCount);
app.get('/api/stats/url/country/count',checkAuth,stats.urlCountryCount);

app.get('/api/stats/site/count',checkAuth,stats.siteCount);
app.get('/api/stats/all/count',checkAuth,stats.allCount);
app.get('/api/stats/ip/count',checkAuth,stats.ipCount);

app.get('/api/stats/browser/count',checkAuth,stats.browserCount);

app.get('/api/stats/url/month/count',checkAuth,stats.urlMonthCount);
app.get('/api/stats/url/day/count',checkAuth,stats.urlDayCount);
app.get('/api/stats/url/year/count',checkAuth,stats.urlYearCount);

app.get('/api/stats/url/browser/month/count',checkAuth,stats.urlBrowserMonthCount);


app.get('/api/system/appevents',checkAuth,system.appEvent);


app.get('/users', checkAuth,user.list);


app.get('/*', loggin);


http.createServer(app).listen(app.get('port'), function(){
  console.log('MBFastUrlAdmin server listening on port ' + app.get('port'));
});
