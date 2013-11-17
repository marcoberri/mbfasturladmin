function standarPaginateQuery(q,model,req,res){

	var mongoose = require('mongoose');
	var Model = mongoose.model(model);  

	  var nPerPage = req.query.limit;
	  var sort_field = req.query.sort;
	  var sort_dir_field = req.query.dir;
	  
	  var sort = {};
	  sort[sort_field] = 1; 
	  
	  if(sort_dir_field === 'ASC'){
	    sort[sort_field] = -1; 
	  }

	

	Model.count(q).exec( 
	 
	   function (err, c) {
	      if (err) {
		return handleError(err);
	       }
	      var count = c;
	      Model.find(q).sort(sort).skip((req.query.page-1)*nPerPage).limit(nPerPage).exec(
		function (err, result) {

			if (err) 
			  return handleError(err);
			var data = { 'totalCount': count, 'data': result };
			res.json(data); 

	        });

	   }
	);

};

exports.appEvent = function(req, res){
  standarPaginateQuery({},"AppEvent",req,res);
};


