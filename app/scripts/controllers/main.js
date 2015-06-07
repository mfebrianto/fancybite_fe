'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the menubookFeApp
 */
angular.module('menubookFeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
