//function getCodeInfobyPage($scope, $http, page) {
//    if ($scope.searchKey == null) {
//        $scope.searchKey = "all";
//    }
//    console.log($scope.searchKey);
//    $http.get(baseUrl + "api/getCodeInfobyPage/" + page + "/" + $scope.searchKey).
//    success(function (data) {
//        $scope.samples = data;
//        console.log(data);
//    })
//}

//function getPageNumber($scope, $http) {
//    if ($scope.searchKey == null || $scope.searchKey == '') {
//        $scope.searchKey = "all";
//    }
//    $http.get(baseUrl + "api/getPageNumber/" + $scope.searchKey).
//   success(function (data) {
//       $scope.pageNumbers = data;

//       $scope.totalPage = data.length;
//       console.log(data);
//   })
//}

//function getNewCommit($scope, $http, id) {
//    $http.get(baseUrl + "api/getNewCommit/" + id).
//    success(function (data) {
//        $scope.newCommits = data;
//        console.log(data);
//    })
//}

//function getAllProduct($scope, $http) {
//    $http.get(baseUrl + "api/getAllProduct").
//   success(function (data) {
//       $scope.allProduct = data;
//   })
//}


//function getAllPlatform($scope, $http) {
//    $http.get(baseUrl + "api/getAllPlatform").
//   success(function (data) {
//       $scope.allPlatform = data;
//   })
//}

//function searchByTitle($scope, $http, title) {
//    $http.get(baseUrl + "api/searchByTitle/" + title).
//   success(function (data) {
//       $scope.samples = data;
//       $scope.pageShow = false;
//   })
//}

//function getAllState($scope, $http) {
//    $http.get(baseUrl + "api/getAllState").
//    success(function (data) {
//        $scope.allState = data;

//    })
//}


//function postCodeOperateion($scope, $http,data)
//{
//    console.log(data);
//    $http.post(baseUrl + "api/updateCodeState", data).success(function (status) {
//        console.log(status)
//    });
//}

gitModule.factory('sampleCodeService', function ($http) {
    var fac = {};
    fac.getCodeInfobyPage = function (searchKey, page,product,platform,state) {
       
        searchKey = searchKey == null ? "all" : searchKey;
        product = product == null ? -1 : product;
        platform = platform == null ? -1 : platform;
        state = state == null ? -1 : state;
        console.log(searchKey);
        return $http.get(baseUrl + "api/getCodeInfobyPage/" + page + "/" + searchKey+"/"+product+"/"+platform+"/"+state);
    }
    fac.getPageNumber = function (searchKey,product,platform,state) {
        searchKey = searchKey == null ? "all" : searchKey;
        product = product == null ? -1 : product;
        platform = platform == null ? -1 : platform;
        state = state == null ? -1 : state;
        return $http.get(baseUrl + "api/getPageNumber/" + searchKey + "/" + product + "/" + platform + "/" + state);

    }

    fac.getNewCommit = function (id) {
        return $http.get(baseUrl + "api/getNewCommit/" + id);
    }

    fac.getAllProduct = function () {
        return $http.get(baseUrl + "api/getAllProduct");

    }


    fac.getAllPlatform = function () {
        return $http.get(baseUrl + "api/getAllPlatform");
    }

    fac.searchByTitle = function (title) {
        return $http.get(baseUrl + "api/searchByTitle/" + title);
    }

    fac.getAllState = function () {
        return $http.get(baseUrl + "api/getAllState");
    }


    fac.postCodeOperateion = function (data) {

        return $http.post(baseUrl + "api/updateCodeState", data);
    }
    fac.getSampleCodeOperation = function (id) {
        return $http.get(baseUrl + "api/getSampleCodeOperation/" + id);
    }
    return fac;
});