describe('PokemonApp pokemons page', function() {
    it('should contain a pokemons list', function() {
        browser.get('http://localhost:8000/app/#!/pokemons');

        var pokemonsList = element.all(by.repeater('singlePokemon in pokemons'));

        expect(pokemonsList.length).not.toEqual(0);
    });
});