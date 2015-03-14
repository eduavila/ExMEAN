//app/routes/contrato.js


function verificaAutenticacao(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.status('401').json('Não autorizado');
  }
}

module.exports = function(app){

  var controller = app.controllers.contato;


  //app.get('/contatos',controller.listContatos);


  // indetificador iguais , muda apenas os verbos.
  // app.get('/contatos/:id',controller.obtemContato);

  // app.delete('/contatos/:id',controller.removeContato);

  app.route('/contatos')
    .get(verificaAutenticacao,controller.listContatos)
    .post(verificaAutenticacao,controller.salvaContato);



  app.route('/contatos/:id')
    .get(verificaAutenticacao,controller.obtemContato)
    .delete(verificaAutenticacao,controller.removeContato);


};
