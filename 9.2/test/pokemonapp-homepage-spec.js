describe('PokemonApp home page', function() {
    it('should have a default title', function() {
        browser.get('http://localhost:8000/app/#!/');

        var title = browser.getTitle();

        expect(title).toEqual('PokemonApp');
    });
});