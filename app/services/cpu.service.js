(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('CpuService', CpuService);

    CpuService.$inject = ['WeaponService'];
    function CpuService(weaponService) {
        var service = {
            getRandomCpuWithWeapon: getRandomCpuWithWeapon
        };

        return service;

        function getRandomCpuWithWeapon(manyWeapons) {
            var randomNumber = Math.floor((Math.random() * manyWeapons));
            var weapon = weaponService.get()[randomNumber];

            return {
                cpu: true,
                weapon: weapon
            }
        }
    }
})();