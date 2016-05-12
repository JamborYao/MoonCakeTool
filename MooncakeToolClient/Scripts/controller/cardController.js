var cardModule = angular.module("card", []);
cardModule.controller('cardController', function ($scope, $http, $uibModal, $log) {

    getAllState($scope, $http);
    $scope.stateChange = function () {
        console.log('called');
    }


    $scope.items = ['item1', 'item2', 'item3'];
    $scope.test = "jambor11";
    $scope.animationsEnabled = true;
    $scope.open = function (size, id) {

        $http.get(baseUrl + "api/getSampleCodeOperation/" + id).
  success(function (data) {
      $scope.operation = data;
      console.log(data);
  }).then(function () {
      console.log($scope.allState);
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
});

cardModule.controller('ModalStateCtrl', function ($scope, $uibModalInstance, cardState) {

    $scope.cardOperation = cardState.operation;
    $scope.allState = cardState.allState;
    $scope.ok = function () {
        $uibModalInstance.close('jambor');
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});