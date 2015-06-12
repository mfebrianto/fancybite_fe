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
  .run(function ($rootScope) {
    $rootScope.MENUBOOK_URI = '/menubook/food_types.json';
    $rootScope.MENUBOOK_FOOD_TYPES_DELETE_URI = '/menubook/food_types/delete.json';
  })
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
      .when('/admins/food_types', {
        templateUrl: 'views/admins/foodType.html',
        controller: 'AdminsFoodTypeCtrl'
      })
      .when('/admins/foods', {
        templateUrl: 'views/admins/food.html',
        controller: 'AdminsFoodCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
