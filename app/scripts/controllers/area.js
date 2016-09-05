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
  .controller('AreaCtrl', function ($scope) {

    activeMenu('area');

    $scope.title = 'Area Chart';

    $scope.area='true';

    $scope.$on('$viewContentLoaded', function(event) {
        interval = setInterval(
            function(){
                var area=$('#area_chart');
                if(area.length==0){
                    return;
                }else{
                    clearInterval(interval);
                }
                area_chart();
            },1000
        );


    });



  });