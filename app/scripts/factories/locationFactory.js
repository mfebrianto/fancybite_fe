'use strict';

angular.module('fancybiteApp')
  .factory('LocationFactory', function($location) {

    var locationFactory = {};

    locationFactory.goToFoodDetail = function(foodId){
      $location.path('/food/'+foodId);
    }

    return locationFactory;
  });
