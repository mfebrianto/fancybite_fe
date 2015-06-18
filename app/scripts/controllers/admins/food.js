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

  .controller('AdminsFoodCtrl', function ($scope, $rootScope, $http, fileUpload) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.uploadFile = function(food_id){
      var file = $scope.myFile;
      console.log('file is ' + JSON.stringify(file));
      var uploadUrl = "/menubook/foods/upload_image.json"+"?food_id="+food_id;
      fileUpload.uploadFileToUrl(file, uploadUrl);
      $scope.initForm();
    };

    $scope.initForm = function(){
      $scope.food = {
        id: '',
        name: '',
        description: ''
      };

      $('#myForm_file').val('');
      $('#myForm_submit').val('submit');
    };


    $scope.foods = [];

    $scope.getAllFoodsFromMenuBook = function(){
      $http.get($rootScope.MENUBOOK_FOOD_URI)
        .success(function(data) {
          $.each(data, function(i) {
            $scope.foods.push(data[i]);
          });
        });
    }

    $scope.getAllFoodsFromMenuBook();
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

      if ($scope.food.id != null) {
        console.log(">>>>>>>>>>>>>");
        $scope.uploadFile($scope.food.id);
      }
      else
      {
        var postFoodToMenuBookResult = $scope.postFoodToMenuBook();
        if (postFoodToMenuBookResult) {
          $scope.foods.push({
            'id': $scope.food.id,
            'name': $scope.food.name,
            'description': $scope.food.description
          });
        }
      }
      $scope.initForm();

    }

    $scope.editRow = function(food_id, food_name, food_description){
      $scope.food = {
        id: food_id,
        name: food_name,
        description: food_description
      };

      $('#myForm_submit').val('update');
    }

    $scope.deleteFoodInMenuBook = function(id){
      var result = false;
      $.ajax({
        type: 'POST',
        url: $rootScope.MENUBOOK_FOOD_DELETE_URI,
        data: {food: {id: id}},
        async:false,
        success: function() {
          result = true;
        }
      });
      return result;
    }

    $scope.removeRow = function(id) {
      var deleteFoodInMenuBook = $scope.deleteFoodInMenuBook(id);
      if (deleteFoodInMenuBook) {
        var index = -1;
        var comArr = eval($scope.foods);
        for (var i = 0; i < comArr.length; i++) {
          if (comArr[i].id === id) {
            index = i;
            break;
          }
        }

        if (index === -1) {
          alert("Something gone wrong");
        }
        $scope.foods.splice(index, 1);
      }
    };

  });
