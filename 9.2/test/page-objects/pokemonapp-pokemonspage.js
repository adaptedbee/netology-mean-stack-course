var PokemonAppPokemonsPage = function() {
    var self = this;

    var url = 'http://localhost:8000/app/#!/pokemons';

    var pokemonsList = element.all(by.repeater('singlePokemon in pokemons'));

    self.get = function() {
        browser.get(url);
    };

    self.getPokemonsList = function() {
        return pokemonsList;
    };
};

module.exports = PokemonAppPokemonsPage;