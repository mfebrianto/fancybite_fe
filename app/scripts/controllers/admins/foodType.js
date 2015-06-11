'use strict';

/**
 * @ngdoc function
 * @name menubookFeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the menubookFeApp
 */
angular.module('fancybiteApp')
  .controller('AdminsFoodTypeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.foodType = {
      name: '',
      description: ''
    };

    $scope.foodTypes = [];

    $scope.addRow = function(){
      $scope.foodTypes.push({ 'name': $scope.foodType.name,
                              'description': $scope.foodType.description });
        $scope.foodType = {
          name: '',
          description: ''
        };
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
