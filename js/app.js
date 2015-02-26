/**
 * Created by filip on 03/02/15.
 */
'use strict';
var ordinacija = angular.module("MarijaDjalovic",["ngRoute","ui.bootstrap"]);

ordinacija.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: '../../OrdinacijaMDjalovic/views/pocetna.html',
            controller:'HomeCtrl'
        })
        .when('/ordinacija',{
            templateUrl: '../../OrdinacijaMDjalovic/views/ordinacija.html'
        })
        .when('/usluge',{
            templateUrl: '../../OrdinacijaMDjalovic/views/usluge.html'
        })
        .when('/pitanja',{
            templateUrl: '../../OrdinacijaMDjalovic/views/pitanjaISaveti.html'
        })
        .when('/kontakt',{
            templateUrl:'../../OrdinacijaMDjalovic/views/kontakt.html'
        })
        .otherwise({
            redirectTo:'/'
        })
}]);