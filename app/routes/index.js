
exports.login = function(req, res){
    console.log("routes/login");

  if(req.session && req.session.logged )  {
    console.log("routes/login --> redirect /home");
    res.redirect('/home');
    return;
  }
  
  var post = req.body;
  if (post.username == 'demo' && post.password == 'demo') {
      req.session.user_id = 'demo';
      req.session.logged = true;
      res.redirect('/home');
     console.log("routes/login --> redirect /home");
    return;
   } else {
         res.redirect('/');
        console.log("routes/login --> redirect /");
        return;
   }

};


exports.logout = function(req, res){
    console.log("routes/logout");
    delete req.session.user_id;
    delete req.session.logged;    
    res.redirect('/');
    console.log("routes/logout --> redirect /");
};

exports.home = function(req,res){
    console.log("routes/home");
    var obj = { title: 'MBFastUrl v.2'};
    res.render('home', obj);
};

exports.index = function(req, res){
    console.log("routes/index");
    var obj = { title: 'MBFastUrl v.2'};
    res.render('index', obj);
};

