var gitModule = angular.module("git", ['ngAnimate', 'ui.bootstrap', 'chieffancypants.loadingBar', 'ngAnimate']).config(function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

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


gitModule.controller('gitController', ['$rootScope', '$scope', '$http', '$uibModal', '$log', 'sampleCodeService','cfpLoadingBar', function ($rootScope, $scope, $http, $uibModal, $log, sampleCodeService, cfpLoadingBar) {
    $scope.SayHello = function () {
        alert('000');
    }
    console.log(11);
    $scope.test = 'hello world!';

    sampleCodeService.getCodeInfobyPage($scope.searchKey, 1).then(function (result) {
        $rootScope.samples = result.data;
        sampleCodeService.getPageNumber($scope.searchKey).then(function (result) {
            $rootScope.pageNumbers = result.data;
        })
        console.log($rootScope);
    })
    

   
    sampleCodeService.getAllProduct().then(function (result) {
        $rootScope.allProduct = result.data;
    })
    sampleCodeService.getAllPlatform().then(function (result) {
        $rootScope.allPlatform = result.data;
    })

    $scope.getNextPage = function (page, obj) {
        sampleCodeService.getCodeInfobyPage($scope.searchKey, page).then(function (result) {
            $rootScope.samples = result.data;
        });
        $(obj.target).parent().parent().find('li span').attr('style', 'cursor:pointer;color:#337ab7');
        $(obj.target).attr('style', 'cursor:pointer;color:indianred');

    };

    $scope.search = function () {
        $rootScope.searchKey = $scope.searchKey;
        console.log($rootScope.searchKey == null);
        console.log($rootScope.searchKey);
        if ($rootScope.searchKey == null || $rootScope.searchKey == '') {
            $rootScope.searchKey = "all";
        }
        sampleCodeService.getCodeInfobyPage($rootScope.searchKey, 1).then(function (result) {
            $rootScope.samples = result.data;
            sampleCodeService.getPageNumber($rootScope.searchKey).then(function (result) {
                $rootScope.pageNumbers = result.data;
            })
        });
       
        
        // searchByTitle($scope, $http, $scope.searchKey);
        // console.log($scope.searchKey == null);
    };

    $scope.selectChange = function () {
        console.log('called');
    }


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

gitModule.controller('ModalStateCtrl', function ($scope, $http, $uibModalInstance, cardState) {

    $scope.cardOperation = cardState.operation;
    console.log($scope.cardOperation);
    $scope.allState = cardState.allState;
    $scope.ok = function () {
        console.log($scope.cardOperation);
        postCodeOperateion($scope, $http, $scope.cardOperation);
        getCodeInfobyPage($scope, $http, 1);
        $uibModalInstance.close('jambor');
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

