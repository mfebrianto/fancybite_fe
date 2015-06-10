'use strict';

/**
 * @ngdoc overview
 * @name menubookFeApp
 * @description
 * # menubookFeApp
 *
 * Main module of the application.
 */
angular
  .module('fancybiteApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/admins/food_type', {
        templateUrl: 'views/admins/foodType.html',
        controller: 'AdminsFoodTypeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
