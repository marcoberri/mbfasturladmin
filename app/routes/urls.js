
exports.index = function(req, res){
 
  console.log("routes/urls/index");
  var mongoose = require('mongoose');
  var FUUrl = mongoose.model('FUUrl');
  var nPerPage = req.query.limit;
  var sort_field = req.query.sort;
  var sort_dir_field = req.query.dir;

 FUUrl.count().exec( 
 
   function (err, c) {
      if (err) 
        return handleError(err);
   
      var count = c; 
      var sort = {'created':-1};

      sort[sort_field] = 1;
                    
      if(sort_dir_field === 'ASC'){
          sort[sort_field] = -1;
        }

      FUUrl.find().sort(sort).skip((req.query.page-1)*nPerPage).limit(nPerPage).exec(
        function (err, fuurl) {
        if (err) 
          return handleError(err);
        var data = { 'totalCount': count, 'data':fuurl };
        res.json(data);     
        }
      );
    }
  );


};

