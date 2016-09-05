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
  .controller('DonusCtrl', function ($scope) {

    activeMenu('donus');

    $scope.title = 'Donus Chart';

    $scope.area='true';

    $scope.$on('$viewContentLoaded', function(event) {
        interval = setInterval(
            function(){
                var donus=$('#donus_chart');
                if(donus.length==0){
                    return;
                }else{
                    clearInterval(interval);
                }
                donus_chart();
            },1000
        );


    });



  });