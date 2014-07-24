'use strict';

/**
 * @ngdoc function
 * @name session1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the session1App
 */
angular.module('session1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
