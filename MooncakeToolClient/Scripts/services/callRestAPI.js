function getCardInfo($scope, $http,page) {
    $http.get(baseUrl + "api/getCodeInfobyPage/"+page).
    success(function (data) {
        $scope.samples = data;
        console.log(data);
    })
}

function getPageNumber($scope, $http) {
    $http.get(baseUrl + "api/getPageNumber").
   success(function (data) {
       $scope.pageNumbers = data;
    
       $scope.totalPage = data.length;
       console.log(data.length);
   })
}