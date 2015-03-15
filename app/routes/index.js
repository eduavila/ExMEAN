
module.exports = function(app){
  app.get('/',function(req,res){
    //console.log(req);
   // var login = '';
    // if(req.user){
    //   login = req.user.login;
    // }
    // console.log(login);
    res.render('index');
  });
};
