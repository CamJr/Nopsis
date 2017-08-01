const routes = ($routeProvider, $httpProvider, $locationProvider) => {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })

        .when('/team', {
            templateUrl: 'views/team.html',
            controller: 'teamController',
            controllerAs: 'vm'
        })
        .when('/program', {
            templateUrl: 'views/program.html',
            controller: 'programController',
            controllerAs: 'vm'
        })
        .when('/pageProgram/:id' , {
            templateUrl: 'views/pageProgram.html',
            controller: 'programController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .when('/store', {
            templateUrl: 'views/store.html'
                  })
        .otherwise({
            redirectTo: '/'
        });
};
