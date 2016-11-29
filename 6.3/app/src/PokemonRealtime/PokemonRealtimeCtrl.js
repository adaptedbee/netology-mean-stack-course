'use strict';

pokemonApp.controller('PokemonRealtimeCtrl', function($scope, MySocket, $routeParams) {

  $scope.username = $routeParams.userName;

  $scope.MySocket = MySocket;

  $scope.submit = function(new_message) {

    console.log(new_message);
    if (!new_message) { return; }
    MySocket.send({
      username: $scope.username,
      message: new_message
    });
    $scope.new_message = '';
  };

});
