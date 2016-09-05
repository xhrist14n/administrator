/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/area', {
        templateUrl: 'views/app/area/area.html',
        controller: 'AreaCtrl'
      })
      .when('/bar', {
        templateUrl: 'views/app/bar/bar.html',
        controller: 'BarCtrl'
      })
      .when('/donus', {
        templateUrl: 'views/app/donus/donus.html',
        controller: 'DonusCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope){
    $rootScope.$on("$includeContentLoaded", function(event, templateName){
      if($rootScope.navigation=='true'){
        $rootScope.navigation='false';
        navigation();
      }

      if($rootScope.page=='true'){
        $rootScope.page='false';
        page();
      }



    });
  });
