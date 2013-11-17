var mongoose = require('mongoose');

var statsBaseSchema = new mongoose.Schema(
    {
	'_id':[{ url: String,fast: String, time: String}],
      'value': { type : Number }
    }
);

