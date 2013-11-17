


function getCache(req,res,callback){

	var params = req.query;
	delete params["_dc"];
	var crypto = require('crypto')
	var md5 = crypto.createHash('md5').update(req.path + JSON.stringify(params)).digest("hex");

	var mongoose = require('mongoose');
	var ModelAppCache = mongoose.model('AppCache');
	var q = {key:md5};
	ModelAppCache.findOne(q).exec(
		function (err, result) {
			if (err) {
    			 	callback(err,null);
			}

			callback(null,result);
		}
	);

}

function putCache(req,result,callback){
	var mongoose = require('mongoose');
	var ModelAppCache = mongoose.model('AppCache');
	var params = req.query;
	delete params["_dc"];
	var crypto = require('crypto')
	var md5 = crypto.createHash('md5').update(req.path + JSON.stringify(params)).digest("hex");
	var appCache =  new ModelAppCache({ uri: req.pathname, data: JSON.stringify(result) , key: md5});
	appCache.save(function (err) {});
	callback(null,true);
}

function standarPaginateQuery(q,model,req,res){

	var mongoose = require('mongoose');
	var Model = mongoose.model(model);  
	var inCache = false;
/*	if(req.query.incache){
	  inCache = req.query.incache;
        }
*/        
	  var nPerPage = req.query.limit;
	  var sort_field = req.query.sort;
	  var sort_dir_field = req.query.dir;
	  
	  var sort = {};
	  sort[sort_field] = 1; 
	  
	  if(sort_dir_field === 'ASC'){
	    sort[sort_field] = -1; 
	  }

	
	getCache(req,res,function callback(err, result) {
	                if(inCache == false)
	                  result = null;
	                  
			if(result == null) {

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
						putCache(req,data,function callback(err, result) {
								res.json(data);  
							});
				      
   				        });
				   }
				);
			} else{
				res.json(JSON.parse(result['data'])); 
			}
	});

}

exports.urlCount = function(req, res){
  standarPaginateQuery({},"STCountSingleUrl",req,res)
};

exports.siteCount = function(req, res){
  standarPaginateQuery({},"STCountSingleSite",req,res)
};



exports.urlMonthCount = function(req, res){
  var fast = req.query.fast;
  var q = {};
   if(fast){
	q['_id.fast']=fast;
    }
   standarPaginateQuery(q,'STCountTimeMonthUrl',req,res);
};


exports.urlBrowserMonthCount = function(req, res){
   var fast = req.query.fast;
  var q = {};
   if(fast){
	q['_id.fast']=fast;
    }
 standarPaginateQuery(q,'STCountTimeMonthUrlBrowser',req,res);
};

exports.urlDayCount = function(req, res){
  var fast = req.query.fast;
  var q = {};
   if(fast){
	q['_id.fast']=fast;
    }
  standarPaginateQuery(q,'STCountTimeDayUrl',req,res);
};



exports.urlBrowserCount = function(req, res){
  var fast = req.query.fast;
  var q = {};
   if(fast){
	q['_id.fast'] = fast;
    }
  standarPaginateQuery(q,'STCountSingleBrowserUrl',req,res);

};

exports.urlCountryCount = function(req, res){
  var fast = req.query.fast;
  var q = {};
   if(fast){
	q['_id.fast'] = fast;
    }
  standarPaginateQuery(q,'STCountSingleCountryUrl',req,res);

};

exports.urlYearCount = function(req, res){
  var fast = req.query.fast;
  var q = {};
   if(fast){
	q['_id.fast']=fast;
    }
  standarPaginateQuery(q,'STCountTimeYearUrl',req,res);

};

exports.browserCount = function(req, res){
  standarPaginateQuery({},'STCountSingleBrowser',req,res);
}

exports.ipCount = function(req, res){
  standarPaginateQuery({},'STCountSingleIp',req,res);

}

exports.allCount = function(req, res){

  var mongoose = require('mongoose');
  var logModel = mongoose.model('FULog');
  var urlModel = mongoose.model('FUUrl');  
  var statsSiteModel = mongoose.model('STCountSingleSite');  
  var statsIpModel = mongoose.model('STCountSingleIp');  
   logModel.count().exec( 
 
   function (err, c) {
      if (err) 
        return handleError(err);
   
      var logCount = c;

      urlModel.count().exec(
        function (err, result) {
        if (err) 
          return handleError(err);

  	    statsSiteModel.count().exec(
  	      function (err, totSite) {
  	      if (err) 
  	        return handleError(err);

	  	    statsIpModel.count().exec(
	  	      function (err, totIp) {
	  	      if (err) 
	  	        return handleError(err);

			var data = { 'data': [
					{'_id':'total_url', 'value':result, 'label': 'Total Url'},
					{ '_id':'total_click', 'value':logCount, 'label': 'Total Click'},
					{ '_id':'total_site', 'value':totSite, 'label': 'Total Sites'},
					{ '_id':'total_ip', 'value':totIp, 'label': 'Total Ip'}, 
			]};

		        res.json(data);     
  	      	     });
  	      });
        });
      
    }
  );
};
