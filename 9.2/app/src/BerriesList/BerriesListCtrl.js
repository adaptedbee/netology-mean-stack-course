'use strict';

pokemonApp.controller('BerriesListCtrl', function($scope, BerriesService) {

    $scope.berries = BerriesService.query();

});
