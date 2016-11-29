'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, PokemonsService, BerriesService, $q) {

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    // });
    //
    // BerriesService.getBerries().then(function(response) {
    //     $scope.berries = response.data.results;
    // });

    $scope.pokemonsLoaded = false;
    $scope.berriesLoaded = false;

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    //     // $scope.pokemons = response.data.data;
    //     $scope.pokemonsLoaded = true;

    //     return BerriesService.getBerries()
    // }).then(function(response) {
    //     $scope.berries = response.data.results;
    //     $scope.berriesLoaded = true;
    // });

    var obj1, obj2;
    var request1 = PokemonsService.getPokemons();
    var request2 = BerriesService.getBerries();
    $q.all([request1, request2]).then(function(values){
        $scope.pokemons = values[0].data.results;
        $scope.pokemonsLoaded = true;

        $scope.berries = values[1].data.results;
        $scope.berriesLoaded = true;
    });

});
