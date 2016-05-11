function getCodeInfobyPage($scope, $http, page) {
    if ($scope.searchKey == null) {
        $scope.searchKey = "all";
    }
    console.log($scope.searchKey);
    $http.get(baseUrl + "api/getCodeInfobyPage/"+page+"/"+$scope.searchKey).
    success(function (data) {
        $scope.samples = data;
        console.log(data);
    })
}

function getPageNumber($scope, $http) {
    if ($scope.searchKey == null || $scope.searchKey == '') {
        $scope.searchKey = "all";
    }
    $http.get(baseUrl + "api/getPageNumber/"+$scope.searchKey).
   success(function (data) {
       $scope.pageNumbers = data;
    
       $scope.totalPage = data.length;
       console.log(data);
   })
}

function getNewCommit($scope, $http, id) {
    $http.get(baseUrl + "api/getNewCommit/" + id).
    success(function (data) {
        $scope.newCommits = data;
        console.log(data);
    })
}

function getAllProduct($scope, $http) {
    $http.get(baseUrl + "api/getAllProduct").
   success(function (data) {
       $scope.allProduct = data;      
   })
}


function getAllPlatform($scope, $http) {
    $http.get(baseUrl + "api/getAllPlatform").
   success(function (data) {
       $scope.allPlatform = data;
   })
}

function searchByTitle($scope, $http,title) {
    $http.get(baseUrl + "api/searchByTitle/"+title).
   success(function (data) {
       $scope.samples = data;
       $scope.pageShow = false;
   })
}