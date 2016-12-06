'use strict';

pokemonApp.controller('CreatePokemonCtrl', function($scope, PokemonsService, $mdToast) {

    $scope.newPokemon = {};

    $scope.createPokemon = function(myPokemon) {

        var newPokemonInstance = new PokemonsService(myPokemon);
        newPokemonInstance.$save({}, function(successResult) {
            // Окей!
            $scope.newPokemon = {};

            $mdToast.show(
                $mdToast.simple()
                .textContent('Привет, покемон ' + successResult.objectId)
                .position('bottom right')
                .hideDelay(3000)
            );

        }, function(errorResult) {
            // Не окей..
        });

    }

});
