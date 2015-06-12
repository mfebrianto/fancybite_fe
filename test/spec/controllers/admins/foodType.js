'use strict';

describe('Controller: AdminsFoodTypeCtrl', function () {

  // load the controller's module
  beforeEach(module('fancybiteApp'));

  var AdminsFoodTypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminsFoodTypeCtrl = $controller('AdminsFoodTypeCtrl', {
      $scope: scope
    });
  }));

  describe('initForm', function(){
    it('should clear field of name and description', function () {
      scope.initForm();
      expect(scope.foodType).toEqual ({name: '',description: ''});
    });
  });

  describe('addRow', function(){
    it('should add member', function () {
      scope.addRow();
      expect(scope.foodTypes.length).toEqual (1);
    });
    it('should clean form', function () {
      scope.addRow();
      expect(scope.foodType).toEqual ({name: '',description: ''});
    });
  });
});
