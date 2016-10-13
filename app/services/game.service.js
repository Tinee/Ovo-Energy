(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('GameService', GameService);

    GameService.$inject = ['CpuService'];
    function GameService(cpuService) {
        var services = {
            playRockPaperScissor: playRockPaperScissor,
            createPlayerPool: createPlayerPool,
            pushGameInHistory: pushGameInHistory,
        };

        return services;

        function playRockPaperScissor(players) {
            var p1 = players[0];
            var p2 = players[1];

            return _getWinnerOfTwoPlayers(p1, p2);
        }

        function pushGameInHistory(game, history){
            history.push(game);

            return history;
        }

        function createPlayerPool(playerWeapon) {
            var cpuWithWeapon = cpuService.getRandomCpuWithWeapon(3);
            return [
                {
                    cpu: false,
                    weapon: playerWeapon
                },
                cpuWithWeapon
            ]
        }

        function _getWinnerOfTwoPlayers(playerOne, playerTwo) {
            var p1 = playerOne;
            var p2 = playerTwo;

            var winningPlayer = {};
            var losingPlayer = {};

            if (p1.weapon.beats === p2.weapon.id) {
                winningPlayer = p1;
                losingPlayer = p2;
            } else if (p2.weapon.beats === p1.weapon.id) {
                winningPlayer = p2;
                losingPlayer = p1;
            }
            else {
                return {
                    won: p1,
                    lost: p2,
                    draw: true
                };
            }
            return {
                won: winningPlayer,
                lost: losingPlayer,
                draw: false
            };
        }
    }
})();
