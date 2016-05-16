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