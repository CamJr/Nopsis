angular.module('app', ['ngRoute'])
  .controller('mainController', mainController)
  .controller('teamController', teamController)
  .controller('programController', programController)
  .config(routes);
