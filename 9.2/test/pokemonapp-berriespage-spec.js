var PokemonAppBerriesPage = require('../test/page-objects/pokemonapp-berriespage');

describe('PokemonApp berries page', function() {
    var pokemonApp = {};

    beforeEach(function() {
      pokemonApp = new PokemonAppBerriesPage();
      pokemonApp.get();
    });

    it('should contain a berries list', function() {
      var berriesList = pokemonApp.getBerriesList();

      expect(berriesList.length).not.toEqual(0);
    });
});