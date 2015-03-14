angular.module('reqfacil')

.factory('ContatoService',function($resource){
  return $resource('/contatos/:id');
});
