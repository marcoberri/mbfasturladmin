var mongoose = require('mongoose');


var statsCountTimeYearUrlSchema = new mongoose.Schema(
    {
	'_id':[{ url: String,fast: String, time: String}],
      'value': { type : Number }
    },
    
    {collection:'Stats.CountTimeYearUrl'}
);

mongoose.model('STCountTimeYearUrl',statsCountTimeYearUrlSchema);
