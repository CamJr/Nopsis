angular.module('app', ['ngRoute'])
  .controller('mainController', mainController)
  .controller('contactController', contactController)
  .controller('teamController', teamController)
  .controller('programController', programController)
  .controller('pageProgramController', pageProgramController)
  .config(routes);
