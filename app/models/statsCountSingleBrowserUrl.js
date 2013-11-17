var mongoose = require('mongoose');

var statsCountSingleBrowserUrlSchema = new mongoose.Schema(
   {
	 '_id' :[{ url: String, fast: String}],
	 'value':{type:Number,default : 0}
    },
    
    {collection:'Stats.CountSingleBrowserUrl'}
);

mongoose.model('STCountSingleBrowserUrl',statsCountSingleBrowserUrlSchema);
