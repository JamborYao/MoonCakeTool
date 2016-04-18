controllers.controller('navController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.navigateTo = function (module) {
            var urllocation = '/' + module + '/';
            if (module === "report")
            {
                $location.url(urllocation);
            }
            else {
                $location.url(urllocation);
            }
        }
        $scope.SayHello = function () {
            alert('111222');
        }
    }]);