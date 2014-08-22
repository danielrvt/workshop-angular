'use strict';

/**
 * @ngdoc overview
 * @name session1App
 * @description
 * # session1App
 *
 * Main module of the application.
 */
 angular
  .module('session1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/resumen', {
        templateUrl: 'views/balance.html',
        controller: 'MainCtrl'
      })
      .when('/transferencias', {
        templateUrl: 'views/transferencias.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });





