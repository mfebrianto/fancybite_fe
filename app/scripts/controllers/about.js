'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the menubookFeApp
 */
angular.module('fancybiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
