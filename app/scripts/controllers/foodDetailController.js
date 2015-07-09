'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the menubookFeApp
 */
angular.module('fancybiteApp')
  .controller('FoodDetailCtrl', function ($scope, $routeParams, FoodFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.food = {};

    this.loadFoodDetail = function(){
      FoodFactory.getFoodDetail($routeParams.foodId)
        .success(function(data){
          $scope.food=data;
        })
    }

    this.loadFoodDetail();


  });
