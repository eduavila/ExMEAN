angular.module('reqfacil',['ngRoute','ngResource'])


// configurando routeProvider

  .factory('meuInterceptor',function($location,$q){
    var interceptor = {
      responseError : function(resposta){
        console.log("erro");
        if(resposta.status == 401){
          $location.path('/auth');
        }
        return $q.reject(resposta);
      }
    }

    return interceptor;
  })


  .config(function($routeProvider,$httpProvider){

    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/contatos',{
      templateUrl:'partials/contatos.html',
      controller: 'ContatosController'
    })
    .when('/contato',{
      templateUrl:'partials/contato.html',
      controller: 'ContatoController'
    })
    .when('/contato/:contatoId',{
      templateUrl:'partials/contato.html',
      controller: 'ContatoController'
    })

    .otherwise({redirectTo:'/contatos'});

});
