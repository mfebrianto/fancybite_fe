'use strict';

angular.module('fancybiteApp')
  .factory('FoodFactory', function($http) {

    var baseUrl = "/menubook/foods"
    var foodFactory = {};

    foodFactory.getAllFoods = function(){
      return $http.get(baseUrl+".json");
    }

    foodFactory.getFoodDetail = function(foodId){
      return $http.get(baseUrl+"/"+foodId+".json");
    }

    //clientFactory.createClient = function(client){
    //  return $http.post(baseUrl+".json", client);
    //}

    //clientFactory.getClient = function(id){
    //  return $http.get(baseUrl+"/"+id+".json");
    //}

    return foodFactory;
  });
