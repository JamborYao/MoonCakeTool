app.directive('cardView', function () {
    return {
        //scope: { cardData: '=' },
        restrict:'E',
        replace:true,
        transclude:true,
        templateUrl: '/partials/cardview.html'
       
    }
});
