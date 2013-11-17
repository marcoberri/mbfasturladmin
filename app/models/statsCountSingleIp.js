var mongoose = require('mongoose');

var statsCountSingleIpSchema = new mongoose.Schema(
    {
      '_id': {type : String, default : '', trim : true},
      'value': { type : Number }
    },
    
    {collection:'Stats.CountSingleIp'}
);

mongoose.model('STCountSingleIp',statsCountSingleIpSchema);
