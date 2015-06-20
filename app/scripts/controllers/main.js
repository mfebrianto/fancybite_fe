'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the menubookFeApp
 */
angular.module('fancybiteApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.foods = [];

    $scope.getAllFoodsFromMenuBook = function(){
      $http.get($rootScope.MENUBOOK_FOOD_URI)
        .success(function(data) {
          $.each(data, function(i) {
            $scope.foods.push(data[i]);
          });
        });
    }

    $scope.getAllFoodsFromMenuBook();
  });
