angular.module('reqfacil').controller('ContatoController',
    function($scope,$resource,$routeParams,ContatoService){

   $scope.mensagem = {texto: ''};
   //
   var Contato = ContatoService;

   if($routeParams.contatoId){
    Contato.get({id:$routeParams.contatoId},
      function(contato){
        $scope.contato = contato;
      },function(erro){
        $scope.mensagem = {
          texto: 'Não foi possível obter o contato'
        };
        console.log(erro);
    });
   }else{
    $scope.contato = new Contato();
   }


   $scope.salva = function(){
      $scope.contato.$save()
        .then(function(){
          $scope.mensagem = {texto:'Salvo com sucesso'};

          //Limpa o formulario
          $scope.contato = new Contato();
        })
        .catch(function(){
          $scope.mensagem = {texto: 'Não foi possível salvar'};
        });
   };


   Contato.query(function(contatos){
      $scope.contatos = contatos;
   });


});
