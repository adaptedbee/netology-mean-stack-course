'use strict';

pokemonApp.component('pokemonList', {

    controller: function PokemonListCtrl(PokemonsService) {

        this.pokemons = PokemonsService.query();

    },

    templateUrl: './src/PokemonList/PokemonList.html'

});
