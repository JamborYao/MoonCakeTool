var controllers = angular.module('controllers', []);

var app = angular.module('_app_', ['ngRoute', 'controllers']);

app.config(['$routeProvider',
  function ($routeProvider) {
      google.charts.load("current", { packages: ['corechart', 'table', 'line', 'corechart'] });
      $routeProvider.
        when('/report/', {
            templateUrl: 'partials/report.html',
            controller: 'reportController'
        }).
        when('/github/', {
            templateUrl: 'partials/github.html',
            controller:'githubController'
        })
  }]);


