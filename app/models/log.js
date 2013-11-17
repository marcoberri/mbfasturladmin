
var mongoose = require('mongoose');

var logSchema = new mongoose.Schema(
    {
      'ip': {type : String, default : '', trim : true},
      'fast': {type : String, default : '', trim : true},      
      'url': {type : String, default : '', trim : true},            
      'created': { type : Date, default : Date.now },
      'headers' : {
                   'Host' :  {type : String, default : '', trim : true},
                   'X-Forwarded-Server' : {type : String, default : '', trim : true},
                   'X-Forwarded-For' : {type : String, default : '', trim : true},
                   'Via' : {type : String, default : '', trim : true},
                   'Connection' : {type : String, default : '', trim : true}
                  }
    },
    {collection:'Log.log'}
);


mongoose.model('FULog',logSchema);
