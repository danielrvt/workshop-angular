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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
