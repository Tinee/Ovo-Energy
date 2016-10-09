(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('GameService', GameService);

    GameService.$inject = [];
    function GameService() {
        var services = {
            getWinner: getWinner
        };

        return services;

        ////////////////
        function getWinner(players) {


        }
    }
})();