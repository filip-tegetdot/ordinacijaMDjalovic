/**
 * Created by filip on 03/02/15.
 */
ordinacija.controller("MainCtrl",['$scope',function($scope){
    $scope.navigation = ["Насловна","Ординација","Питања и савети","Услуге","Контакт"];
    $scope.navigation = [
        {name:'Насловна',url:"#/"},
        {name:'Ординација',url:"#/ordinacija"},
        {name:'Питања и савети',url:"#/pitanja"},
        {name:'Услуге',url:"#/usluge"},
        {name:'Контакт',url:"#/kontakt"},
    ];
    $scope.selectNav = function(navItem){
        $scope.selectedItem = navItem;
    }
    $scope.subNavItems = ["Дијагностика","Естетска хирургија","Дечја превентивна хирургија","Парадонтологија","Стоматолошка протетика","Имплатанти","Орална хирургија","Озон","Ортодонција","Избељивање"];
}]);