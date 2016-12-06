var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource', 'restangular', 'ui.bootstrap', 'ngMaterial']);

angular.
module('PokemonApp')

.config(['$routeProvider', 'RestangularProvider',
    function config($routeProvider, RestangularProvider) {

        $routeProvider.
        when('/pokemons', {
            template: '<pokemon-list></pokemon-list>'
        }).
        when('/pokemons/:pokemonId', {
            template: '<pokemon-detail></pokemon-detail>'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

        RestangularProvider.setBaseUrl('https://api.backendless.com/v1/data/');

    }
])

.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.headers.common = {
        "application-id": "4B730C92-F81E-236B-FFF0-6651FE882800",
        "secret-key": "CB6DE86C-6069-86C4-FF1C-9049D5AC9400"
    };

}]);
