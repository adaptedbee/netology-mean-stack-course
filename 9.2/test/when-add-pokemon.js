describe('When add new pokemon', function() {
    describe('and name field is not empty', function() {
        it('PokemonApp should return confirm message', function() {
            browser.get('http://localhost:8000/app/#!/create');

            element(by.model('newPokemon.name')).sendKeys('TestName');
            element(by.model('newPokemon.weight')).sendKeys(100);
            element(by.model('newPokemon.height')).sendKeys(55);

            element(by.id('addPokemon')).click();

            var confirmMessage = element(by.id('confirmMessage')).getText();
            expect(confirmMessage).toContain("Привет");
        });
    });

    describe('and name field is empty', function() {
        it('form should be invalid', function() {
            browser.get('http://localhost:8000/app/#!/create');

            element(by.model('newPokemon.weight')).sendKeys(100);
            element(by.model('newPokemon.height')).sendKeys(55);

            var formClass = element(by.name('pokemonForm')).getAttribute('class');
            expect(formClass).toContain("ng-invalid");
        });
    });
});