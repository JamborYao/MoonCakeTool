controllers.controller('navleftController', ['$scope', '$state',
    function ($scope,$state) {
        $scope.navigateTo = function (module) {
            console.log('index.github');
            $state.transitionTo('github');
        }
    }]);