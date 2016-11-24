'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(function($stateProvider) {

      var view1State = {
        name: 'view1',
        url: '/view1',
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      };

      var view2State = {
        name: 'view2',
        url: '/view2',
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      };

      var pokeListState = {
        name: 'pokeList',
        url: '/list',
        templateUrl: 'PokemonList/PokemonList.html',
        controller: 'PokemonListCtrl as vm'
      };
      var createPokemonState = {
        name: 'createNewPokemon',
        url: '/new',
        templateUrl: 'CreatePokemon/CreatePokemon.html',
        controller: 'CreatePokemonCtrl as vm'
      };
        var pokemonDetailState = {
        name: 'detail',
        url: '/pokemons/:pokemonId',
        templateUrl: 'PokemonDetail/PokemonDetail.html',
        controller: 'PokemonDetailCtrl as vm'
      };

      $stateProvider
          .state(pokeListState)
          .state(createPokemonState)
          .state(pokemonDetailState);
})

.controller('myAppCtrl', function ($scope) {
  $scope.menuItems = [{
    link: 'pokeList',
    name: 'Список'
  },{
    link: 'createNewPokemon',
    name: 'Добавить нового'
  }];
});
