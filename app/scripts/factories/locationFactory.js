'use strict';

angular.module('gocvApp')
  .factory('LocationFactory', function($location) {

    var locationFactory = {};

    locationFactory.goToFoodDetai = function(foodId){
      $location.path('/food/'+foodId);
    }

    return locationFactory;
  });
