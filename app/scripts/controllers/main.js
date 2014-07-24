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

    $scope.instruments = [
        {
            "name": "Cuenta Corriente Máxima",
            "number": "890887789898798798",
            "balance": 9.99,
            "type": "ACC"
        },
        {
            "name": "Cuenta Corriente",
            "number": "878237498789788304",
            "balance": 3999.99,
            "type": "ACC"
        },
        {
            "name": "Cuenta Ahorros",
            "number": "234234234333334553",
            "balance": 25989.9834444444,
            "type": "ACC"
        },
        {
            "name": "Tarjeta Platinum Máxima",
            "number": "878237234333345234",
            "balance": 0.0,
            "type": "CC"
        },
        {
            "name": "Tarjeta Dorada",
            "number": "8782324344454233",
            "balance": 9,
            "type": "CC"
        }
    ]

  });
