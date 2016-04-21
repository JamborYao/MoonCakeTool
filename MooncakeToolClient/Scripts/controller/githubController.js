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
        replace: true
        
    }
})



gitModule.controller('gitController', ['$scope','$http', function ($scope,$http) {
    $scope.SayHello = function () {
        alert('000');
    }
    getCardInfo($scope, $http,1);
    getPageNumber($scope, $http);
    
    $scope.getNextPage = function (page, obj)
    {
        getCardInfo($scope, $http, page);
        $(obj.target).parent().parent().find('li span').attr('style', 'cursor:pointer;color:#337ab7');
        $(obj.target).attr('style', 'cursor:pointer;color:indianred');
      
    }
    //$scope.samples = [{
    //    author: 'Free @Bootply',
    //    tag: 'dashboard1',
    //    body: "There a load of new free Bootstrap 3 ready templates at Bootply. All of these templates are free and don't require extensive customization to the Bootstrap baseline."
    //}]
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
