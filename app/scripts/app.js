'use strict';

/**
 * @ngdoc overview
 * @name coffeeDeYesseUiApp
 * @description
 * # coffeeDeYesseUiApp
 *
 * Main module of the application.
 */
angular
  .module('coffeeDeYesseUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'coffeeDeYesseUiAppServices'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
       url: '/about',
       templateUrl: '/views/about.html',
       controller: 'AboutCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '/views/admin-product-view.html',
        
      })
      .state('admin.new', {
        url: '/new',
        templateUrl: '/views/new-product.html',
        controller: 'NewProductControl'
      })
      .state('admin.list', {
        url: '/list',
        templateUrl: '/views/product-list.html',
        controller: 'AdminProductListCtrl'

      })
      .state('show', {
        url: '/show/:id',
        templateUrl: '/views/admin-show.html',
        controller: 'ProductShowCtrl'
      });
  });
