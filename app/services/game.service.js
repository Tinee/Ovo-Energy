(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('GameService', GameService);

    GameService.$inject = ['CpuService'];
    function GameService(cpuService) {
        var services = {
            playRockPaperScissor: playRockPaperScissor
        };

        return services;

        ////////////////

        function playRockPaperScissor(players) {
            var p1 = players[0];
            var p2 = players[1];
            
            return _getWinnerOfTwoPlayers(p1, p2);
        }

        function _getWinnerOfTwoPlayers(playerOne, playerTwo) {
            var p1 = playerOne;
            var p2 = playerTwo;

            var winningPlayer = {};

            if (p1.weapon.beats === p2.weapon.id) {
                winningPlayer = p1;
            } else if (p2.weapon.beats === p1.weapon.id) {
                winningPlayer = p2;
            }
            else {
                // Returns draw.
                return null;
            }
            return winningPlayer;
        }
    }
})();