'use strict';

describe('Controller: ProductShowCtrl', function () {

  // load the controller's module
  beforeEach(module('coffeeDeYesseUiApp'));

  var ProductShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductShowCtrl = $controller('ProductShowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
