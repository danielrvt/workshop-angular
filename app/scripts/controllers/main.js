'use strict';

/**
 * @ngdoc function
 * @name session1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the session1App
 */

angular.module('session1App')
  .controller('MainCtrl', function ($scope) {
$scope.numold=0;
//    $scope.checked=false;
    $scope.$watch(function() {
  return $scope.num;
}, function(newValue, oldValue) {
  
          
    $scope.numold=oldValue;
    console.log($scope.numold);
});

      $scope.totalTranferible=0;
      $scope.totalAtranferir=0;
      $scope.num=0;
      $scope.depositar=[];
      $scope.deps=[];
      $scope.instruments = [
        {
            "name": "Cuenta Corriente Máxima",
            "number": "890887789898798798",
            "balance": 9.99,
            "type": "ACC",
            "show": "false"
        },
        {
            "name": "Cuenta Corriente",
            "number": "878237498789788304",
            "balance": 3999.99,
            "type": "ACC",
            "show": "false"
        },
        {
            "name": "Cuenta Ahorros",
            "number": "234234234333334553",
            "balance": 25989.9834444444,
            "type": "ACC",
            "show": "false"
        },
        {
            "name": "Tarjeta Platinum Máxima",
            "number": "878237234333345234",
            "balance": 0.0,
            "type": "CC",
            "show": "false"
        },
        {
            "name": "Tarjeta Dorada",
            "number": "8782324344454233",
            "balance": 9,
            "type": "CC",
            "show": "false"
        }
    ]
    
$scope.selectedInstruments = [];
$scope.val;
      
$scope.chkClick = function(inst,check) {
    //console.log(check);
    //console.log(inst);
    if (check===false){
    $scope.selectedInstruments=_.union($scope.selectedInstruments,inst);
    $scope.val=inst.balance;
    console.log($scope.selectedInstruments);
//   // console.log($scope.instruments);
//    $scope.totalTranferible=$scope.totalTranferible+inst.balance;
//    //console.log($scope.totalTranferible);
    $scope.depositar= _.difference($scope.instruments,inst);
    $scope.depositar.value=0;
     console.log($scope.depositar);
 }
 
}
$scope.trans=[];
$scope.transClick = function() {
    //console.log(check);
    //console.log(inst);
   console.log($scope.num);
 
} 
    
$scope.HelloCtrl = function(hola) {
 $scope.checked=hola;
}

$scope.change = function(num) {
        if (num)
          $scope.num=$scope.num+parseInt(num);
        else
            console.log (es)
          $scope.num=$scope.numold-$scope.num;  
      };

  });
