describe('PokemonApp pokemons page', function() {
    it('should contain a pokemons list', function() {
        browser.get('http://localhost:8000/app/#!/pokemons');

        var firstPokemonName = element(by.repeater('singlePokemon in pokemons').row(0).column('singlePokemon.name'));

        expect(firstPokemonName).not.toBe(undefined);
    });
});