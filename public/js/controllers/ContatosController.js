angular.module('reqfacil').controller('ContatosController',
    function($scope,$resource,ContatoService){

      $scope.contatos = [];

      $scope.filtro = '';

      $scope.mensagem = {texto: ''};


      var Contato = ContatoService;

      function buscaContatos(){
        Contato.query(
          function(contatos){
            $scope.contatos = contatos;
          },
          function(erro){
            console.log(erro);

            $scope.mensagem = {
              texto:"Não foi possível obter a lista de contatos"
            };
          }
        );
      }


      buscaContatos();




      // remove contato

      $scope.remove = function(contato){
        // console.log(contato);
        //  var promise =  Contato.delete({id:contato._id});
        //  promise
        //   .then(buscaContatos)
        //   .catch(function(erro){
        //     console.log("Não foi possível remover o contato");
        //     console.log(erro);
        //   });


        Contato.delete({id: contato._id},
          buscaContatos,
          function(erro){
            $scope.mensagem = {
              texto:"Não foi possível obter a lista de contatos"
            };
            console.log(erro);
          }
        );

      };





      // var promise = Contato.query().$promise;

      // promise
      //   .then(function(contatos){
      //     $scope.contatos = contatos;
      //   })
      //   .catch(function(erro){
      //     console.log("Não foi possível obter a lista de contatos");
      //     console.log(erro);
      //   });






      // $http.get('/contatos')
      //   .success(function(data){
      //     $scope.contatos = data;
      //   })
      // .error(function(statusText){
      //     console.log("Não foi possível obter a lista de contatos").
      //     console.log(statusText);
      // });
});
