(function(){
    "use strict";

    angular.module('site', ['ngRoute']).config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html',
            controller: 'SiteController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });
    });

})();
