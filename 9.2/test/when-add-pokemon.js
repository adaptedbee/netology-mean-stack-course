var PokemonAppAddPokemonPage = require('../test/page-objects/pokemonapp-addpokemonpage');

describe('When add new pokemon', function() {
    var pokemonApp = {};

    beforeEach(function() {
      pokemonApp = new PokemonAppAddPokemonPage();
      pokemonApp.get();
    });

    describe('and name field is not empty', function() {
        it('PokemonApp should return confirm message', function() {
            pokemonApp.setPokemonName('TestName');
            pokemonApp.setPokemonWeight(100);
            pokemonApp.setPokemonHeight(55);
            pokemonApp.addPokemon();
            var confirmMessage = pokemonApp.getConfirmMessage();

            expect(confirmMessage).toContain("Привет");
        });
    });

    describe('and name field is empty', function() {
        it('form should be invalid', function() {
            pokemonApp.setPokemonWeight(100);
            pokemonApp.setPokemonHeight(55);
            var formClass = pokemonApp.getFormClassList();

            expect(formClass).toContain("ng-invalid");
        });
    });
});