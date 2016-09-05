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
  .controller('BarCtrl', function ($scope) {

    activeMenu('bar');

    $scope.title = 'Bar Chart';

    $scope.bar='true';

    $scope.$on('$viewContentLoaded', function(event) {
        interval = setInterval(
            function(){
                var bar=$('#bar_chart');
                if(bar.length==0){
                    return;
                }else{
                    clearInterval(interval);
                }
                bar_chart();
            },1000
        );


    });



  });