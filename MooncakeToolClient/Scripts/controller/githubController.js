var gitModule = angular.module("git", []);

gitModule.directive('card', function () {
    return {
        scope: {
            cardData: '='
           
        },
        restrict: 'AEMC',
        templateUrl: '/partials/card.html',
        controller: function ($scope) {
            this.alertME = function () {
                console.log('1');
            }
        },
        //template:'<div>hello</div>',
        replace: true
        ,
        link: function (scope, element, attrs) {
            scope.saybye= function () {
                alert('say bye');
            }
        }
    }
}).directive("subcard", function () {
    return {
        require: '^card',
        link: function (scope, element, attrs, gitController) {
            gitController.alertME();
        }
    }
})

gitModule.controller('gitController', ['$scope', function ($scope) {
    $scope.SayHello = function () {
        alert('000');
    }
    $scope.samples = [{
        author: 'Free @Bootply',
        tag: 'dashboard1',
        body: "There a load of new free Bootstrap 3 ready templates at Bootply. All of these templates are free and don't require extensive customization to the Bootstrap baseline."
    },
    {
        author: 'Free @jambor',
        tag: 'dashboard1',
        body: "There a load of new free Bootstrap 3 ready templates at Bootply. All of these templates are free and don't require extensive customization to the Bootstrap baseline."
    },
    {
        author: 'Free @karen',
        tag: 'dashboard1',
        body: "There a load of new free Bootstrap 3 ready templates at Bootply. All of these templates are free and don't require extensive customization to the Bootstrap baseline."
    }]
}])

controllers.controller('githubController', ['$scope',
    function ($scope) {
        $scope.SayHello = function () {
            alert('111222');
        }
    }]);

//   
//   

// 
