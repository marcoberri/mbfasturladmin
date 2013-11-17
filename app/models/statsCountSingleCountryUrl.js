var mongoose = require('mongoose');

var statsCountSingleCountryUrlSchema = new mongoose.Schema(
   {
	 '_id' :[{ url: String,fast: String, country:String, countryIso:String}],
	 'value':{type:Number,default : 0}
    },
    
    {collection:'Stats.CountSingleCountryUrl'}
);

mongoose.model('STCountSingleCountryUrl',statsCountSingleCountryUrlSchema);
