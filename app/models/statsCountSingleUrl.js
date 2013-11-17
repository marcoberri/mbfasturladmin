var mongoose = require('mongoose');

var statsCountSingleUrlSchema = new mongoose.Schema(
   {
	 '_id' :[{ url: String,fast: String}],
	 'value':{type:Number,default : 0}
    },
    
    {collection:'Stats.CountSingleUrl'}
);

mongoose.model('STCountSingleUrl',statsCountSingleUrlSchema);
