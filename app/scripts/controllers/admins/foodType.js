'use strict';

/**
 * @ngdoc function
 * @name fancybiteApp.controller:AdminsFoodTypeCtrl
 * @description
 * # AboutCtrl
 * Controller of the fancybiteApp
 */
angular.module('fancybiteApp')
  .controller('AdminsFoodTypeCtrl', function ($scope, $rootScope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.foodTypes = [];

    $scope.getAllFoodTypesFromMenuBook = function(){
      $http.get($rootScope.MENUBOOK_URI)
        .success(function(data) {
          $.each(data, function(i) {
            $scope.foodTypes.push(data[i]);
          });
        });
    }

    $scope.initForm = function(){
      $scope.foodType = {
        name: '',
        description: ''
      };
    };

    $scope.getAllFoodTypesFromMenuBook();
    $scope.initForm();

    $scope.postFoodTypeToMenuBook = function(){
      var result = false;
      $.ajax({
        type: 'POST',
        url: $rootScope.MENUBOOK_URI,
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
