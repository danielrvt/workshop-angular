'use strict';

angular.module('sesion1App')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, idE) {
  	  $scope.idE = idE;
	  $scope.detalle = {
	  	"name": "CTM",
	  	"idE": idE,
	  	"balance": "6.66",
	  	"blocked": "23.93"
	  }

	  $scope.ok = function () {
	    $modalInstance.close();
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };  	
  });