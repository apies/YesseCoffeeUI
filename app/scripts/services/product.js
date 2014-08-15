'use strict';

/**
 * @ngdoc service
 * @name coffeeDeYesseUiApp.product
 * @description
 * # product
 * Service in the coffeeDeYesseUiApp.
 */
angular.module('coffeeDeYesseUiAppServices', ['ngResource'])
  .factory('Product', function product($resource) {
    return($resource('/api/products/:id', {id: "@id"}, {update: {method: "PUT"}}));
  });



