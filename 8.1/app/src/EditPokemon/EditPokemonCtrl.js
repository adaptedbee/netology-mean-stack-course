'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, Restangular, $routeParams) {

    Restangular.one('pokemon', $routeParams['pokemonId']).get().then(function(response) {
        $scope.pokemon = response
    });

    $scope.updatePokemon = function() {

        $scope.pokemon.put().then(function(successResult) {
            // Окей!
            $scope.updateSuccess = true;
        }, function(errorResult) {
            // Не окей..
            $scope.updateSuccess = false;
        });

    }

});
