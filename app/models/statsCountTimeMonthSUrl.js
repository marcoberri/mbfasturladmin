var mongoose = require('mongoose');



var statsCountTimeMonthUrlSchema = new mongoose.Schema(
    {
	'_id':[{ url: String,fast: String, time: String}],
      'value': { type : Number }
    },
    
    {collection:'Stats.CountTimeMonthUrl'}
);

mongoose.model('STCountTimeMonthUrl',statsCountTimeMonthUrlSchema);
