var cardModule = angular.module("card", ['git']);
cardModule.controller('cardController', ['$scope', '$http', '$uibModal', '$log', 'sampleCodeService', function ($scope, $http, $uibModal, $log, sampleCodeService) {

    sampleCodeService.getAllState().then(function (result) {
        $scope.allState = result.data;
    })

    $scope.animationsEnabled = true;
    $scope.open = function (size, id) {

        sampleCodeService.getSampleCodeOperation(id).then(function (result) {

            $scope.operation = result.data;
            console.log($scope.operation);
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/partials/cardState.html',
                controller: 'ModalStateCtrl',
                size: size,
                resolve: {
                    cardState: function () {
                        return {
                            operation: $scope.operation,
                            allState: $scope.allState
                        }
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

    $scope.setBarWidth = function (width) {
        return { 'width': width }
    };
}]);

cardModule.controller('ModalStateCtrl', ['$rootScope','$scope', '$http', '$uibModalInstance', 'sampleCodeService', 'cardState', function ($rootScope,$scope, $http, $uibModalInstance, sampleCodeService, cardState) {
    console.log(cardState);
    $scope.cardOperation = cardState.operation;
    console.log($scope.cardOperation);
    $scope.allState = cardState.allState;
    $scope.ok = function () {
        console.log($scope.cardOperation);
        console.log($scope);
        sampleCodeService.postCodeOperateion($scope.cardOperation).then(function () {
            sampleCodeService.getCodeInfobyPage($scope.searchKey, 1).then(function (result) {
                $rootScope.samples = result.data;
            })
        });

        $uibModalInstance.close('jambor');
    };
    $scope.cancel = function () {
        console.log($rootScope);
        $uibModalInstance.dismiss('cancel');
    };
}]);