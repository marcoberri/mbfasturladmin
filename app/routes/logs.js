
exports.index = function(req, res){
 
  console.log("routes/logs/index");
  var mongoose = require('mongoose');
  var FULog = mongoose.model('FULog');
  var nPerPage = req.query.limit;
  var sort_field = req.query.sort;
  var sort_dir_field = req.query.dir;
 
 FULog.count().exec( 
 
   function (err, c) {
      if (err) 
        return handleError(err);
      var count = c; 
      var sort = {'created':-1};

      sort[sort_field] = 1;
                    
      if(sort_dir_field === 'ASC'){
          sort[sort_field] = -1;
        }
                                                    

      var field = {"ip":1,"fast":1,"url":1, "created":1,"agent.name":1,"ipSpecify.country":1, "ipSpecify.city":1};
      var query={};
      FULog.find(query,field).sort(sort).skip((req.query.page-1)*nPerPage).limit(nPerPage).exec(
        function (err, fulog) {
        if (err) 
          return handleError(err);
        var data = { 'totalCount': count, 'data':fulog };
        res.json(data);     
        }
      );
    }
  );


};

