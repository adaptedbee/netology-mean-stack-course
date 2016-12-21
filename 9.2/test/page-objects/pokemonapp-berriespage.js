var PokemonAppBerriesPage = function() {
    var self = this;

    var url = 'http://localhost:8000/app/#!/berries';

    var berriesList = element.all(by.repeater('singleBerry in berries'));

    self.get = function() {
        browser.get(url);
    };

    self.getBerriesList = function() {
        return berriesList;
    };

};

module.exports = PokemonAppBerriesPage;