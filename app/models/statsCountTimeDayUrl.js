var mongoose = require('mongoose');

var statsCountTimeDayUrlSchema = new mongoose.Schema(
    {
	'_id':[{ url: String,fast: String, time: String}],
      'value': { type : Number }
    },
    
    {collection:'Stats.CountTimeDayUrl'}
);

mongoose.model('STCountTimeDayUrl',statsCountTimeDayUrlSchema);
