var mongoose = require('mongoose');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function(){

  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
    clientID: 'd9b980ccf8d8f37dd3d2',
    clientSecret:'9894cbe2e5ee08d58c2b04c3ba489a96788597fe',
    callbackURL:'http://localhost:3000/auth/github/callback'
  }, function(accessToken,refleshToken,profile,done){
      Usuario.findOrCreate(
        {"login": profile.username},
        {"nome": profile.username},
        function(erro,usuario){
          if(erro){
            console.log(erro);
            return done(erro);
          }
          return done(null,usuario);
        }

      );
  }));


  passport.serializeUser(function(usuario,done){
    done(null,usuario._id);
  });

  passport.deserializeUser(function(id,done){
    Usuario.findById(id).exec()
    .then(function(){
      done(null,usuario);
    });
  });
};
