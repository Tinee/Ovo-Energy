(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('WeaponService', WeaponService);

    WeaponService.$inject = [];
    function WeaponService() {
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
                    image: './app/assets/images/60 Rock.png',
                    beats: 3
                },
                {
                    id: 2,
                    name: 'Paper',
                    image: './app/assets/images/60 Paper.png',
                    beats: 1
                },
                {
                    id: 3,
                    name: 'Scissors',
                    image: './app/assets/images/60 Scissors.png',
                    beats: 2
                }
            ]
        }
    }
})();