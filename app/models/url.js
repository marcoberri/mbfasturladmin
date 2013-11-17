var mongoose = require('mongoose');

var urlSchema = new mongoose.Schema(
    {
      'fast': {type : String, default : '', trim : true},
      'port': {type : String, default : '80', trim : true},      
      'url': {type : String, default : '', trim : true},
      'created': { type : Date, default : Date.now },
      'ending': { type : Date, default : Date.now },
      'protocol': {type : String, default : '', trim : true}
    },
    {collection:'Url.url'}
);

mongoose.model('FUUrl',urlSchema);

