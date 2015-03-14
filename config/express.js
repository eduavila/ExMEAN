// config/express.js

var express = require('express');


// Importa Express Load para carregamneto depenências
var  load = require('express-load');
// importando middlewares

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(){


  var  app = express();
  // configureanção de ambiente
  app.set('port',3000);

  //middleware
  app.use(express.static('./public')); // seta local arquivos staticos

  // middleware express template engine
  app.set('view engine','ejs'); // set tipo de tempalte engine ejs ou

  app.set('views','./app/views');  // seta loca das views.

  //configurando passport

  app.use(cookieParser());
  app.use(session(
    {secret:'homem evetruz',
     resave:true,
     saveUninitialized: true
    }
  ));

  app.use(passport.initialize());
  app.use(passport.session());


  // configuração body parser

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')())



  // carrega todos os scripts
  load('models',{cwd:'app'})
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);


  return app;
};
