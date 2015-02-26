/**
 * Created by filip on 24/02/15.
 */
ordinacija.controller("HomeCtrl",function($scope,$q,$http){
    $scope.interval = 4000;
    $scope.carouselItems = $q.defer();
    $http.get("../../OrdinacijaMDjalovic/content/carousel.json")
        .success(function(success){
            $scope.carouselItems.resolve(success.imageSource);
        });
    $scope.carouselItems.promise.then(function(success){
        $scope.carouselItems = success;
    })
});