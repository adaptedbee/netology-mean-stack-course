describe('When add new pokemon', function() {
    describe('PokemonApp should', function() {
        it('return OK message', function() {
            browser.get('http://localhost:8000/app/#!/create');

            element(by.model('newPokemon.name')).sendKeys('TestName');
            element(by.model('newPokemon.weight')).sendKeys(100);
            element(by.model('newPokemon.height')).sendKeys(55);

            element(by.id('addPokemon')).click();

            var confirmMessage = element(by.id('confirmMessage')).getText();
            expect(confirmMessage).toContain("Привет");
        });
    });
});