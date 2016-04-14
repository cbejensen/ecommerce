'use strict'

angular.module('ecommerce', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  
  // For any unmatched url, redirect to home
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home/homeView.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'pages/admin/adminView.html',
      controller: 'AdminController'
    })

});