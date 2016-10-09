(function () {
    'use strict';

    angular
        .module('app.factories')
        .factory('WeaponsFactory', WeaponsFactory);

    WeaponsFactory.$inject = [];
    function WeaponsFactory() {
        var services = {
            get: get
        };

        return services;

        ////////////////
        function get() {
            return [
                {
                    id: 1,
                    name: 'Rock',
                    beats: 3
                },
                {
                    id: 2,
                    name: 'Paper',
                    beats: 1
                },
                {
                    id: 3,
                    name: 'Scissors',
                    beats: 2
                }
            ]
        }
    }
})();