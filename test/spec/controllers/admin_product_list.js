'use strict';

describe('Controller: AdminProductListCtrl', function () {

  // load the controller's module
  beforeEach(module('coffeeDeYesseUiApp'));

  var AdminProductListCtrl,
    scope, Product, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Product_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    Product = _Product_;
    scope = $rootScope.$new();

    $httpBackend.whenGET('/api/products').respond([
      {name: 'Light Roast', _id: 1},
      {name: 'Dark Roast', _id: 2}
    ]);

    AdminProductListCtrl = $controller('AdminProductListCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));

  it('should attach a list of products to the scope', function () {
    expect(scope.products.length).toBe(2);
  });
});
