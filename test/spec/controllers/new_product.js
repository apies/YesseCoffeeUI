'use strict';

describe('Controller: NewProductCtrl', function () {

  // load the controller's module
  beforeEach(module('coffeeDeYesseUiApp'));

  var NewProductCtrl,
    scope, Product, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Product_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    Product = _Product_;
    scope = $rootScope.$new();

    NewProductCtrl = $controller('NewProductCtrl', {
      $scope: scope
    });
  }));

  it('should attach a new product to the scope', function () {
    expect(scope.product.name).toBe('Enter Name Here');
  });

  it('should save new products',function() {
    scope.saveProduct();
    $httpBackend.expectPOST('/api/products').respond({name: 'Enter Name Here'});
    $httpBackend.flush();
  });

});
