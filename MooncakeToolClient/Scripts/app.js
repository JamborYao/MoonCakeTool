var baseUrl = "http://10.168.172.89:88/";

var controllers = angular.module('controllers', []);


var app = angular.module('_app_', ['ngRoute', 'controllers','git']);

app.config(['$routeProvider',
  function ($routeProvider) {
      //google.charts.load("current", { packages: ['corechart', 'table', 'line', 'corechart'] });
      $routeProvider.
        when('/report/', {
            templateUrl: 'partials/report.html',
            controller: 'reportController'
        }).
        when('/github/', {
            templateUrl: 'partials/github.html',
            controller: 'githubController'
        }).
        otherwise({
            redirectTo:'/github/'
        })

  }]);

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
