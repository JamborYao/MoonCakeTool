/// <reference path="angular-ui-router.js" />

var baseUrl = "http://localhost:8929/";

var controllers = angular.module('controllers', ['ui.router']);


var app = angular.module('_app_', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            templateUrl:'partials/index.html'
        })
        .state('index.test', {
            templateUrl: 'partials/test.html'
        })
});
app.controller('MainCtrl', function ($state) {
    $state.transitionTo('index.test');
});
//app.config(function ($stateProvider, $urlRouterProvider) {
//    $stateProvider
//        .state('index', {
//            templateUrl: 'partials/reportGoogle.html'            
//        })
//    .state('github', {
//        views: {
//            'navtop': {
//                url: '/',
//                templateUrl: 'partials/navtop.html'
//            },
//            'navleft': {
//                url: '/',
//                templateUrl: 'partials/navleft.html',
//                controller: 'navleftController'
//            }
//        }
//    })
//}).run(['$state', function ($state) {
//    $state.transitionTo('index');
//}]);

//app.config(['$routeProvider',
//  function ($routeProvider) {
//      //google.charts.load("current", { packages: ['corechart', 'table', 'line', 'corechart'] });
//      $routeProvider.
//        when('/report/', {
//            templateUrl: 'partials/report.html',
//            controller: 'reportController'
//        }).
//        when('/github/', {
//            templateUrl: 'partials/github.html',
//            controller: 'githubController'
//        }).
//        otherwise({
//            redirectTo:'/github/'
//        })

//  }]);

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
