//app/routes/home.js


module.exports = function(app){

  var  controller = app.controllers.home;

  app.get('/', controller.index);
}
