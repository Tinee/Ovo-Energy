(function () {
    'use strict';

    angular
        .module('app.factories')
        .factory('GameFactory', GameFactory);

    GameFactory.$inject = [];
    function GameFactory() {
        var services = {
            getWinner: getWinner
        };

        return services;

        ////////////////
        function getWinner(players) {


        }
    }
})();