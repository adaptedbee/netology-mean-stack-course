'use strict';

angular.module('myApp.lost', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/404', {
      templateUrl: '404/404.html',
      controller: 'LostCtrl'
    });
  }])
  .controller('LostCtrl', function($scope){
    $scope.message = "Page not found :(";
  });