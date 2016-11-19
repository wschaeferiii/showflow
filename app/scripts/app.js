'use strict';

/**
 * @ngdoc overview
 * @name shofloApp
 * @description
 * # shofloApp
 *
 * Main module of the application.
 */
angular
  .module('shofloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/scripts', {
        templateUrl: 'views/scripts.html',
        controller: 'ScriptsCtrl',
        controllerAs: 'scripts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
