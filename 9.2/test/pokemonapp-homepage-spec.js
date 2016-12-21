var PokemonAppHomePage = require('../test/page-objects/pokemonapp-homepage');

describe('PokemonApp home page', function() {
    var pokemonApp = {};

    beforeEach(function() {
      pokemonApp = new PokemonAppHomePage();
      pokemonApp.get();
    });

    it('should have a default title', function() {
      var title = pokemonApp.getPageTitle();

      expect(title).toEqual('PokemonApp');
    });
});