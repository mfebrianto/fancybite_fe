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

    this.loadFoodDetail = function(){
      FoodFactory.getFoodDetail($routeParams.foodId)
        .success(function(){
          console.log(">>>>>"+data.name);
        })
    }

    this.loadFoodDetail();


  });
