'use strict';

pokemonApp.component('pokemonDetail', {

    controller: function PokemonDetailCtrl($routeParams, PokemonsService){
        this.pokemonLoaded = false;

        this.pokemon = PokemonsService.get({
            pokemonId: $routeParams['pokemonId']
        }, function(successResult) {
            // Окей!
            this.notfoundError = false;
            this.pokemonLoaded = true;

            this.activeTab = 1;
        }, function(errorResult) {
            // Не окей..
            this.notfoundError = true;
            this.pokemonLoaded = true;

            this.disableControlTab = true;
        });

        this.pokemon.$promise.then(function(result) {
            //$scope.pokemonLoaded = true;
        });

        this.deletePokemon = function(pokemonId) {

            this.pokemon.$delete({
                pokemonId: pokemonId
            }, function(successResult) {
                // Окей!
                this.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                this.deletionError = true;
            });

        }
    },

    templateUrl: './src/PokemonDetail/PokemonDetail.html'

});
