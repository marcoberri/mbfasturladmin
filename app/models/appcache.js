var mongoose = require('mongoose');

var appCacheSchema = new mongoose.Schema(
    {
     'key' : {'type':'String', 'index' : true},
     'uri' : {'type':'String'},
     'params' : {'type':'String'},
     'data' : {'type':'String'},
     'time' : { 'type' : 'Date', default:  Date.now },
    },
    {collection:'App.cache'}
);

mongoose.model('AppCache',appCacheSchema);
