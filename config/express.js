// config/express.js

var express = require('express');


// Importa Express Load para carregamneto depenências
var  load = require('express-load');
// importando middlewares

var bodyParser = require('body-parser');

module.exports = function(){


  var  app = express();
  // configureanção de ambiente
  app.set('port',3000);

  //middleware
  app.use(express.static('./public')); // seta local arquivos staticos

  // middleware express template engine
  app.set('view engine','ejs'); // set tipo de tempalte engine ejs ou

  app.set('views','./app/views');  // seta loca das views.

  // configuração body parser

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')())



  // carrega todos os scripts
  load('models',{cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);


  return app;
};
