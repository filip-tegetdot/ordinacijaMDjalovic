/**
 * Created by filip on 03/02/15.
 */
'use strict';
var ordinacija = angular.module("MarijaDjalovic",["ngRoute","ui.bootstrap"]);

ordinacija.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: '../../OrdinacijaMarijaDjalovic/views/pocetna.html',
            controller:'HomeCtrl'
        })
        .when('/ordinacija',{
            templateUrl: '../../OrdinacijaMarijaDjalovic/views/ordinacija.html'
        })
        .when('/usluge',{
            templateUrl: '../../OrdinacijaMarijaDjalovic/views/usluge.html'
        })
        .when('/pitanja',{
            templateUrl: '../../OrdinacijaMarijaDjalovic/views/pitanjaISaveti.html'
        })
        .when('/kontakt',{
            templateUrl:'../../OrdinacijaMarijaDjalovic/views/kontakt.html'
        })
        .otherwise({
            redirectTo:'/'
        })
}]);