'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, PokemonsService, $routeParams) {

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
    });

    $scope.editPokemon = function(updatedPokemon) {
        $scope.editSuccess = false;

        PokemonsService.updatePokemon($routeParams['pokemonId'], $scope.pokemon).then(function(pokemonData) {
            $scope.pokemon = updatedPokemon;
            $scope.editSuccess = true;
        });
    }

});
