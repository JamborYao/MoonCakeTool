var gitModule = angular.module("git", ['ngAnimate', 'ui.bootstrap']);

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



gitModule.controller('gitController', ['$scope', '$http', function ($scope, $http, $uibModal, $log) {
    $scope.SayHello = function () {
        alert('000');
    }
    getCodeInfobyPage($scope, $http, 1);
    getPageNumber($scope, $http);
    getAllProduct($scope, $http);   
    getAllPlatform($scope, $http);
    $scope.getNextPage = function (page, obj) {
        getCodeInfobyPage($scope, $http, page);
        $(obj.target).parent().parent().find('li span').attr('style', 'cursor:pointer;color:#337ab7');
        $(obj.target).attr('style', 'cursor:pointer;color:indianred');

    };

    $scope.search = function () {
        console.log($scope.searchKey == null);
        console.log($scope.searchKey);
        if ($scope.searchKey == null || $scope.searchKey=='') {
            $scope.searchKey = "all";
        }
        getCodeInfobyPage($scope, $http, 1);
        getPageNumber($scope, $http);
       // searchByTitle($scope, $http, $scope.searchKey);
       // console.log($scope.searchKey == null);
    };

    $scope.selectChange = function () {
        console.log('called');
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
gitModule.controller('ModalDemoCtrl', function ($scope, $http, $uibModal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];
    $scope.test = "jambor11";
    $scope.animationsEnabled = true;
    $scope.open = function (size, id) {

        $http.get(baseUrl + "api/getNewCommit/" + id).
    success(function (data) {
        $scope.newCommits = data;
        console.log(data);
    }).then(function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/partials/newCommit.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                commits: function () {
                    return $scope.newCommits;
                }
            }
        });

        modalInstance.result.then(function (name) {
            console.log(name);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    });


    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

gitModule.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, commits) {
    $scope.test = "jambor1";
    $scope.items = commits;
    console.log(11);
    console.log(commits); console.log(11);
    $scope.ok = function () {
        $uibModalInstance.close('jambor');
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

