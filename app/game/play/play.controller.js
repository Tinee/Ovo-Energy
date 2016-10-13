(function () {
  'use strict';

  angular
    .module('app.game')
    .controller('PlayController', PlayController);

  PlayController.$inject = ['WeaponService', 'GameService', 'CpuService'];
  function PlayController(weaponService, gameService, cpuService) {
    var vm = this;


    vm.weapons = [];
    vm.players = [];
    vm.game = null;
    vm.gameMessage = '';
    vm.choiseWeaponMessage = 'Choise Weapon!';
    vm.gameHistory = [];

    vm.play = play;
    vm.checkResult = checkResult;

    activate();

    function activate() {
      vm.weapons = weaponService.get();
    }

    function play(playerWeapon) {
      vm.players = gameService.createPlayerPool(playerWeapon);
      vm.game = gameService.playRockPaperScissor(vm.players);
      checkResult();
      vm.gameHistory = gameService.pushGameInHistory(vm.game, vm.gameHistory);
    }

    function checkResult() {
      var winner = vm.game.won;
      var loser = vm.game.won;

      if (vm.game.draw) {
        vm.gameMessage = 'Draw!'
      }
      else {
        if (winner.cpu) {
          vm.gameMessage = 'Bot Won with ' + winner.weapon.name;
        } else {
          vm.gameMessage = 'You Won with ' + winner.weapon.name;
        }
      }
    }
  }
})();
