var PokemonAppHomePage = function() {
    var self = this;

    var url = 'http://localhost:8000/app/#!/';

    var pageTitle = browser.getTitle();

    self.get = function() {
        browser.get(url);
    };

    self.getPageTitle = function() {
        return pageTitle;
    };
};

module.exports = PokemonAppHomePage;