

var  contatos = [
  {_id:1,nome:'Contato Exmplo 1',
  email:'cont1@empres.com.br'},
  {_id:2,nome:'Contato Exmplo 2',
  email:'cont2@empres.com.br'},
  {_id:3,nome:'Contato Exmplo 3',
  email:'cont3@empres.com.br'}
];


module.exports = function(){

  var controller = {};

  controller.listContatos = function(req,res){
      res.json(contatos);
  };

  controller.obtemContato = function(req,res){

    var idContato = req.params.id;
    console.log(idContato);
    var contato = contatos.filter(function(contato){

      return contato._id == idContato;
    })[0];
    contato ?
      res.json(contato):
      res.status(404).send('Contato não encontato');

  };

  return controller;
};
