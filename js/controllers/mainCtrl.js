/**
 * Created by filip on 03/02/15.
 */
ordinacija.controller("MainCtrl",['$scope',function($scope){
    $scope.navigation = ["Naslovna","Ordinacija","Pitanja i Saveti","Usluge","Kontakt"];
    $scope.navigation = [
        {name:'Naslovna',url:"#/"},
        {name:'Ordinacija',url:"#/ordinacija"},
        {name:'Pitanja i Saveti',url:"#/pitanja"},
        {name:'Usluge',url:"#/usluge"},
        {name:'Kontakt',url:"#/kontakt"},
    ]
}]);