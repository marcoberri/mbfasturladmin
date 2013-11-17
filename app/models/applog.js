var mongoose = require('mongoose');

var applogSchema = new mongoose.Schema(
    {
     'session': {'type':'String'},
     'url' : {'type':'String', 'index' : true},
     'time' : { 'type' : 'Date', default:  Date.now },
     'isWorker': {'type':'Boolean'},     	
    },
    {collection:'App.log'}
);



mongoose.model('AppLog',applogSchema);
