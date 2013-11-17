var mongoose = require('mongoose');

var appeventSchema = new mongoose.Schema(
    {
     'action' : {'type':'String'},
     'date' : { 'type' : Date, default : Date.now },
     'result': {'type':'Boolean'},
     'note' : {'type':'String'},
     'category' : {'type':'String'},     	
    },
    {collection:'App.event'}
);



mongoose.model('AppEvent',appeventSchema);
