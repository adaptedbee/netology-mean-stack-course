var PokemonAppPokemonsPage = require('../test/page-objects/pokemonapp-pokemonspage');

describe('PokemonApp pokemons page', function() {
    var pokemonApp = {};

    beforeEach(function() {
      pokemonApp = new PokemonAppPokemonsPage();
      pokemonApp.get();
    });

    it('should contain a pokemons list', function() {
      var pokemonsList = pokemonApp.getPokemonsList();

      expect(pokemonsList.length).not.toEqual(0);
    });
});