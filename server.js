// reqFacil/server.js


var http = require('http');
var app = require('./config/express')();
// chamando modulo de configuração banco de dados .
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/reqfacil');

http.createServer(app)
  .listen(app.get('port'),function(){

  console.log('Express Server escutando na porta '+app.get('port'));

});
