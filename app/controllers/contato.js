

var  contatos = [
  {_id:1,nome:'Contato Exmplo 1',
  email:'cont1@empres.com.br'},
  {_id:2,nome:'Contato Exmplo 2',
  email:'cont2@empres.com.br'},
  {_id:3,nome:'Contato Exmplo 3',
  email:'cont3@empres.com.br'}
];


var ID_CONTATO_INC = 3;

module.exports = function(app){

  var Contato = app.models.contato

  var controller = {};

  controller.listContatos = function(req,res){
      //var promise = Contato.find().exec();
      Contato.find().populate('emergencia').exec()
      .then(
        function(contatos){
          res.json(contatos);
        },
        function(erro){
          console.error(erro)
          res.status(500).json(erro);
        })
  };

  function adiciona(contatoNovo){

  }


  function atualiza(contatoAlterar){

  }

  controller.salvaContato = function(req,res){
    var _id = req.body._id;
    if(_id){
      Contato.findByIdAndUpdate(_id,req.body).exec()
      .then(
        function(contato){
          res.json(contato);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        }
      );
    }else{
      Contato.create(req.body)
      .then(
        function(contato){
          res.status(201).json(contato);
        },
        function(erro){
          console.log(erro);
          res.status(500).json(erro);
        });
    }
  };

  controller.obtemContato = function(req,res){
    var _id = req.params.id;
    Contato.findById(_id).exec()
    .then(
      function(contato){
        if(!contato) throw new Error("Contato não encontrado");
        res.json(contato)
      },
      function(erro){
        console.log(erro);
        res.status(404).json(erro)
      }
    );
  };

  controller.removeContato = function(req,res){
    var _id = req.params.id;
    Contato.remove({"_id":_id}).exec()
    .then(
      function(){
        res.end();
      },
      function(erro){
        return console.error(erro);
      }
    );
  };

  return controller;
};
