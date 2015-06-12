'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the menubookFeApp
 */
angular.module('fancybiteApp')
  .controller('AdminsFoodTypeCtrl', function ($scope, $rootScope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.initForm = function(){
      $scope.foodType = {
        name: '',
        description: ''
      };
    };

    $scope.initForm();
    $scope.foodTypes = [];

    $scope.postFoodTypeToMenuBook = function(){
      var result = false;
      $.ajax({
        type: 'POST',
        url: '/menubook/food_types.json',
        data: {food_type: $scope.foodType},
        async:false,
        success: function() {
          result = true;
        }
      });
      return result;
    }

    $scope.addRow = function(){
      var postFoodTypeToMenuBookResult = $scope.postFoodTypeToMenuBook();
      if (postFoodTypeToMenuBookResult) {
        $scope.foodTypes.push({
          'name': $scope.foodType.name,
          'description': $scope.foodType.description
        });
        $scope.initForm();
      }
    };

    $scope.removeRow = function(name){
      var index = -1;
      var comArr = eval( $scope.foodTypes );
      for( var i = 0; i < comArr.length; i++ ) {
        if( comArr[i].name === name ) {
          index = i;
          break;
        }
      }

      if( index === -1 ) {
        alert( "Something gone wrong" );
      }
      $scope.foodTypes.splice( index, 1 );
    }


  });
