/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope) {
    activeMenu('main');

    $scope.navigation = false;

    $scope.navigation=function(){
      load_navigation();
    }
/*
    var interval = setInterval(
      function () {
        if($scope.navigation==true){
          load_navigation();
          clearInterval(interval);
        }
      },100
    );
    if($scope.page==true){
      load_page();
    }
*/
  });