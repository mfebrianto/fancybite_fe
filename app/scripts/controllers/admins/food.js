'use strict';

/**
 * @ngdoc function
 * @name fancybiteApp.controller:AdminsFoodCtrl
 * @description
 * # AboutCtrl
 * Controller of the fancybiteApp
 */
angular.module('fancybiteApp')

  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }])

  .service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
      var fd = new FormData();
      fd.append('food_image', file);
      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
        .success(function(){
        })
        .error(function(){
        });
    }
  }])

  .controller('AdminsFoodCtrl', function ($scope, $rootScope, fileUpload) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.uploadFile = function(){
      var file = $scope.myFile;
      console.log('file is ' + JSON.stringify(file));
      var uploadUrl = "/menubook/foods/upload_image";
      fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    $scope.initForm = function(){
      $scope.food = {
        name: '',
        description: ''
      };
    };

    $scope.foods = [];
    $scope.initForm();

    $scope.postFoodToMenuBook = function(){
      var result = false;
      $.ajax({
        type: 'POST',
        url: $rootScope.MENUBOOK_FOOD_URI,
        data: {food: $scope.food},
        async:false,
        success: function() {
          result = true;
        }
      });
      return result;
    };

    $scope.addRow = function() {
      var postFoodToMenuBookResult = $scope.postFoodToMenuBook();
      if (postFoodToMenuBookResult) {
        $scope.foods.push({
          'id': $scope.food.id,
          'name': $scope.food.name,
          'description': $scope.food.description
        });
        $scope.initForm();
      }
    }

  });
