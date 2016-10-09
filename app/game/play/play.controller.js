(function () {
    'use strict';

    angular
        .module('app.game')
        .controller('PlayController', PlayController);

    PlayController.$inject = ['WeaponService', 'GameService'];
    function PlayController(weaponService, gameService) {
        var vm = this;
        vm.weapons = [];

        activate();

        ////////////////

        function activate() {
            vm.weapons = weaponService.get();
        }

        function play(weapon) 
        {
            var player = {
                cpu: false,
                weapon: weapon
            }

            gameService.playRockPaperScissor(player);
        }
    }
})();