(function () {
  'use strict';

  angular
    .module('app.game')
    .controller('GameController', GameController);

  GameController.$inject = ['$location'];
  function GameController($location) {
    var vm = this;

    vm.play = play;

    activate();

    function activate() {
    }

    function play(){
      $location.path('play');
    }
  }
})();