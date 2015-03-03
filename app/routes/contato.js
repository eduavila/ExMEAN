//app/routes/contrato.js


module.exports = function(app){

  var controller = app.controllers.contato;

  app.get('/contatos',controller.listContatos);
  app.get('/contatos/:id',controller.obtemContato);


};
