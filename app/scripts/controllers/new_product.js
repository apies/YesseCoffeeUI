'use strict';

/**
 * @ngdoc function
 * @name coffeeDeYesseUiApp.controller:NewProductCtrl
 * @description
 * # NewProductCtrl
 * Controller of the coffeeDeYesseUiApp
 */

var NewProductControl = function($scope, Product) {
  $scope.product = new Product({name: 'Enter Name Here'});
  
  $scope.saveProduct = function(){
    $scope.product.$save(function(product) {
      console.log(product);
    });
  };
}

angular.module('coffeeDeYesseUiApp').controller('NewProductCtrl', NewProductControl);

