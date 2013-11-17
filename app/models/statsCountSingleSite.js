var mongoose = require('mongoose');

var statsCountSingleSiteSchema = new mongoose.Schema(
    {
      '_id': {type : String, default : '', trim : true},
      'value': { type : String, default : '', trim: true }
    },
    
    {collection:'Stats.CountSingleSite'}
);

mongoose.model('STCountSingleSite',statsCountSingleSiteSchema);
