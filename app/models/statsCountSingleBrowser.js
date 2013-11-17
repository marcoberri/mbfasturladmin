var mongoose = require('mongoose');

var statsCountSingleBrowserSchema = new mongoose.Schema(
    {
      '_id': {type : String, default : '', trim : true},
      'value': { type : Number }
    },
    
    {collection:'Stats.CountSingleBrowser'}
);

mongoose.model('STCountSingleBrowser',statsCountSingleBrowserSchema);
