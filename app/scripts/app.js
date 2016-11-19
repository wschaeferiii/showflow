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
      .when('/concept', {
        templateUrl: 'views/concept.html',
        controller: 'ConceptCtrl',
        controllerAs: 'concept'
      })
      .when('/dailies', {
        templateUrl: 'views/dailies.html',
        controller: 'DailiesCtrl',
        controllerAs: 'dailies'
      })
      .when('/finishedshow', {
        templateUrl: 'views/finishedshow.html',
        controller: 'FinishedShowCtrl',
        controllerAs: 'finishedshow'
      })
      .when('/marketing', {
        templateUrl: 'views/marketing.html',
        controller: 'MarketingCtrl',
        controllerAs: 'marketing'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
