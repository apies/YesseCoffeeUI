'use strict';

/**
 * @ngdoc function
 * @name coffeeDeYesseUiApp.controller:AdminProductListCtrl
 * @description
 * # AdminProductListCtrl
 * Controller of the coffeeDeYesseUiApp
 */

var AdminProductListControl = function($scope, Product) {


  // Product.query(function(products, error) {
  //   $scope.products = products;
  // });

  $scope.products = Product.query();

}

angular.module('coffeeDeYesseUiApp').controller('AdminProductListCtrl', AdminProductListControl);
