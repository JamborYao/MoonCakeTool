var cardModule = angular.module("card", ['git']);
cardModule.controller('cardController', ['$scope', '$http', '$uibModal', '$log', 'sampleCodeService', '$rootScope', function ($scope, $http, $uibModal, $log, sampleCodeService, $rootScope) {

    //sampleCodeService.getAllState().then(function (result) {
    //    $scope.allState = result.data;
    //})

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
                            allState: $rootScope.allState
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
    $scope.onlyNumbers = /^\d+$/;
    $scope.labor = 10;
    console.log($scope.cardOperation);
    $scope.allState = cardState.allState;
    $scope.ok = function () {      
        sampleCodeService.postCodeOperateion($scope.cardOperation).then(function () {
            sampleCodeService.getCodeInfobyPage($rootScope.searchKey, $rootScope.page).then(function (result) {
            
                console.log($rootScope);
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

cardModule.directive('validNumber', function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function (val) {
                if (angular.isUndefined(val)) {
                    var val = '';
                }
                var clean = val.replace(/[^0-9\.]/g, '');
                var decimalCheck = clean.split('.');

                if (!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0, 2);
                    clean = decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function (event) {
                if (event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});