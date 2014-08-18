'use strict';

/**
 * @ngdoc function
 * @name sesion1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sesion1App
 */
angular.module('sesion1App')
  .controller('MainCtrl', function ($scope, $modal, $log) {

  	$scope.instruments=[
		{
			"name": "CTM",
			"number": "12123456789098765432",
			"balance": "6.66",
			"type": "ACC",
			"idE": "TPA5748"
		},
		{
			"name": "CC",
			"number": "98765432145678976543",
			"balance": "5555.76",
			"type": "ACC",
			"idE": "TPA5749"
		},
		{
			"name": "CA",
			"number": "88877788998877665544",
			"balance": "456.7654398712",
			"type": "TDC",
			"idE": "PPA8464"
		},
		{
			"name": "CA",
			"number": "88877788998877665544",
			"balance": "456.7654398712",
			"type": "TDC",
			"idE": "PPA8545"
		},
	];

	$scope.orderProp = 'name';

	$scope.order = function (type) {
  		$scope.orderProp = ""+type;
  	}

  	$scope.open = function (idE) {

	    var modalInstance = $modal.open({
	      templateUrl: 'views/myModalContent.html',
	      controller: "ModalInstanceCtrl",
	      resolve: {
	        idE: function () {
	        	return idE;
	        }
	      }
	    });

	    modalInstance.result.then(function () {
	      
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
  	};

  });