describe('PokemonApp berries page', function() {
    it('should contain a berries list', function() {
        browser.get('http://localhost:8000/app/#!/berries');

        var firstBerryName = element(by.repeater('singleBerry in berries').row(0).column('singleBerry.name'));

        expect(firstBerryName).not.toBe(undefined);
    });
});