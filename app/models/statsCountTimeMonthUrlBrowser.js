var mongoose = require('mongoose');

var statsCountTimeMonthUrlBrowserSchema = new mongoose.Schema(
    {
      '_id':[{ url: String,fast: String, time: String, browser: String}],
      'value': { type : Number }
    },
    
    {collection:'Stats.CountTimeMonthUrlBrowser'}
);

mongoose.model('STCountTimeMonthUrlBrowser',statsCountTimeMonthUrlBrowserSchema);
