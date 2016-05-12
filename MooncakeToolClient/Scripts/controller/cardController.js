var cardModule = angular.module("card", []);
cardModule.controller('cardController', function ($scope, $http, $uibModal, $log) {

    getAllState($scope, $http);   

 
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

cardModule.controller('ModalStateCtrl', function ($scope,$http, $uibModalInstance, cardState) {

    $scope.cardOperation = cardState.operation;
    console.log($scope.cardOperation);
    $scope.allState = cardState.allState;
    $scope.ok = function () {
        console.log($scope.cardOperation);       
        postCodeOperateion($scope, $http, $scope.cardOperation);
        
        $uibModalInstance.close('jambor');
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});