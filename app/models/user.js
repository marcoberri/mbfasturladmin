var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
     'email': { 
           type: String, 
           index: { unique: true } 
           },
     'password': String,
         'salt': String
    },
    {collection:'App.user'}
);



mongoose.model('AppUser',userSchema);