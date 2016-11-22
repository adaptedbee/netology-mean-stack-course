'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.lost'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/',{redirectTo:'/view1'})
  .otherwise({redirectTo: '/404'});

 // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
