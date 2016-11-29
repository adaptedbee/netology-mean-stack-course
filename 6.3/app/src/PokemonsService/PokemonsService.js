angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            // $http.defaults.headers.common = {
            //     "application-id": "FA990639-222E-29E0-FF58-DEF01A2D0300",
            //     "secret-key": "37178C9F-5803-AAE4-FF5E-184AB76C4100"
            // };

            // .common doesn't work for pokeapi
            $http.defaults.headers.post = {
                "application-id": "FA990639-222E-29E0-FF58-DEF01A2D0300",
                "secret-key": "37178C9F-5803-AAE4-FF5E-184AB76C4100"
            };
            $http.defaults.headers.delete = {
                "application-id": "FA990639-222E-29E0-FF58-DEF01A2D0300",
                "secret-key": "37178C9F-5803-AAE4-FF5E-184AB76C4100"
            };

            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                    // return $http.get('https://api.backendless.com/v1/data/pokemon');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                    // return $http.get('https://api.backendless.com/v1/data/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId
                    });
                }

            }

        }

    );
