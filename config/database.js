var mongoose  = require('mongoose');


module.exports = function(uri){
  //mongoose.connect(uri); // por padrão criar poll com cinco conexões.
  mongoose.connect(uri, { server: {pollSize:15}});

  //Habilita debug

  mongoose.set('debug',true);


  mongoose.connection.on('connected',function(){
    console.log('Mongoose! Conectado em '+uri);
  });

  mongoose.connection.on('disconnected',function(){
    console.log('Mongoose! Desconectado  de '+uri);
  });

  mongoose.connection.on('error',function(erro){
    console.log('Mongoose! erro na conexão:'+ erro);
  });

  process.on('SIGINT',function(){
    mongoose.connection.close(function(){
      console.log('Mongoose! Desconectado pelo término da aplicação');

      process.exit(0);
    })
  });
}
