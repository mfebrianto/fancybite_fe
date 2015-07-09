'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the menubookFeApp
 */
angular.module('fancybiteApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, LocationFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.foods = [];

    this.getAllFoodsFromMenuBook = function(){
      $http.get($rootScope.MENUBOOK_FOOD_URI)
        .success(function(data) {
          $.each(data, function(i) {
            $scope.foods.push(data[i]);
          });
        });
    }

    this.getAllFoodsFromMenuBook();

    $scope.showDetail = function(foodId){
      LocationFactory.goToFoodDetail(foodId);
    }

  });
