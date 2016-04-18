app.directive('cardview', function () {
    return {
        //scope: { cardData: '=' },
        restrict:'E',
        replace:true,
        transclude:true,
        templateUrl: '/partials/cardview.html'
       
    }
});
