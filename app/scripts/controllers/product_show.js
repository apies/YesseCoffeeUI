'use strict';

/**
 * @ngdoc function
 * @name coffeeDeYesseUiApp.controller:ProductShowCtrl
 * @description
 * # ProductShowCtrl
 * Controller of the coffeeDeYesseUiApp
 */
angular.module('coffeeDeYesseUiApp')
  .controller('ProductShowCtrl', function ($scope, Product, $stateParams) {
    $scope.product = Product.get({id: $stateParams.id});
  });
