var mongoose = require('mongoose');

var statsCountUrlBrowserSchema = new mongoose.Schema(
   {
	 '_id' :[{ url: String,fast: String}],
	 'value':{type:Number,default : 0}
    },
    
    {collection:'Stats.CountUrlBrowser'}
);

mongoose.model('STCountUrlBrowser',statsCountUrlBrowserSchema);
