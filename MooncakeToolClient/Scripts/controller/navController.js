controllers.controller('navController', ['$scope', '$location', '$window', '$http',
    function ($scope, $location, $window, $http) {
        $scope.navigateTo = function (module) {
            var urllocation = '/' + module + '/';
            if (module === "report")
            {
                $location.url(urllocation);
                //$window.location.reload();
            }
            else {
                $location.url(urllocation);
            }
        }

    }]);