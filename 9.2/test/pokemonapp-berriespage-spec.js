describe('PokemonApp berries page', function() {
    it('should contain a berries list', function() {
        browser.get('http://localhost:8000/app/#!/berries');

        var berriesList = element.all(by.repeater('singleBerry in berries'));

        expect(berriesList.length).not.toEqual(0);
    });
});