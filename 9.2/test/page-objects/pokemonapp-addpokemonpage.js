var PokemonAppAddPokemonPage = function() {
    var self = this;

    var url = 'http://localhost:8000/app/#!/create';

    var newPokemonName = element(by.model('newPokemon.name'));
    var newPokemonWeight = element(by.model('newPokemon.weight'));
    var newPokemonHeight = element(by.model('newPokemon.height'));
    var addButton = element(by.id('addPokemon'));
    var newPokemonForm = element(by.name('pokemonForm'));

    self.get = function() {
        browser.get(url);
    };

    self.setPokemonName = function(number) {
        newPokemonName.sendKeys(number);
    };

    self.setPokemonWeight = function(number) {
        newPokemonWeight.sendKeys(number);
    };

    self.setPokemonHeight = function(number) {
        newPokemonHeight.sendKeys(number);
    }

    self.addPokemon = function() {
        addButton.click();
    }

    self.getConfirmMessage = function() {
        var confirmMessage = element(by.id('confirmMessage')).getText();
        return confirmMessage;
    }

    self.getFormClassList = function() {
        return newPokemonForm.getAttribute('class');
    }
};

module.exports = PokemonAppAddPokemonPage;