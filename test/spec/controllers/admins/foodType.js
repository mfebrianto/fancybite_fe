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

  describe('addRow', function(){
    it('should add member', function () {
      expect(scope.foodType).toEqual ({name: '',description: ''});
    });
  });
});
