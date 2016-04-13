var controllers = angular.module('controllers', []);

var app = angular.module('_app_', ['ngRoute', 'controllers']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'partials/report.html',
            controller: 'reportController'
        })
  }]);


