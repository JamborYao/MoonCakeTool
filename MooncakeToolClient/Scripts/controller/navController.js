controllers.controller('navController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.navigateTo = function (module) {
            var urllocation = '/' + module + '/';
            $location.url(urllocation);
        }

    }]);