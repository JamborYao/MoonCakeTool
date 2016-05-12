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


gitModule.controller('gitController', ['$scope', '$http', 'columnChart', function ($scope, $http, $uibModal, $log, columnChart) {
    $scope.SayHello = function () {
        alert('000');
    }
    console.log(11);
    $scope.test = 'hello world!';
    getCodeInfobyPage($scope, $http, 1);
    getPageNumber($scope, $http);
    getAllProduct($scope, $http);
    getAllPlatform($scope, $http);

    $scope.getNextPage = function (page, obj) {
        getCodeInfobyPage($scope, $http, page);
        $(obj.target).parent().parent().find('li span').attr('style', 'cursor:pointer;color:#337ab7');
        $(obj.target).attr('style', 'cursor:pointer;color:indianred');

    };
    console.log(columnChart.list);
    $scope.search = function () {
        console.log($scope.searchKey == null);
        console.log($scope.searchKey);
        if ($scope.searchKey == null || $scope.searchKey == '') {
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
}]).factory('columnChart', function () {
    var columnChart = {};
    columnChart.list = [];
    var data = [
          ["Element", "Density", { role: "style" }],
          ["Copper", 8.94, "#b87333"],
          ["Silver", 10.49, "silver"],
          ["Gold", 19.30, "gold"],
          ["Platinum", 21.45, "color: #e5e4e2"]
    ];
    columnChart.list = data;
    return columnChart;
});

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