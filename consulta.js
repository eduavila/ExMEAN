var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


var _idProdurando = new ObjectId('54ff8398a1ee6f2ece815285');

MongoClient.connect('mongodb://127.0.0.1:27017/reqfacil',function(erro,db){
  if(erro) throw err;

  db.collection('contatos').findOne({_id: _idProdurando},
      function(erro,contato){
        if(erro) throw err;
        console.log(contato);
      }
    );
  }
);
