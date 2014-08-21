'use strict';

describe('Controller: ProductShowCtrl', function () {

  // load the controller's module
  beforeEach(module('coffeeDeYesseUiApp'));

  var ProductShowCtrl,
    scope, $httpBackend, Product, $stateParams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Product_, _$httpBackend_, _$stateParams_) {
    $httpBackend = _$httpBackend_;
    $stateParams = _$stateParams_;

    $httpBackend.whenGET('/api/products/1').respond({name: 'First Product'});
    Product = _Product_;
    
    $stateParams.id = 1;
    scope = $rootScope.$new();

    ProductShowCtrl = $controller('ProductShowCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));
  it('should show all products to the scope', function () {
    expect(scope.product.name).toBe('First Product');
    expect(true).toBe(true);
  });
});
