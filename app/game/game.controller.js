(function () {
  'use strict';

  angular
    .module('app.game')
    .controller('GameController', GameController);

  GameController.$inject = ['$state'];
  function GameController($state) {
    var vm = this;

    vm.play = play;
    vm.btnText = '';

    activate();

    function activate() {
      vm.btnText = 'play';
    }

    function play() {
      $state.go('shell.play');
    }
  }
})();
