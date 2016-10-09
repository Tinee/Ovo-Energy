(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('CpuService', CpuService);

    CpuService.$inject = ['WeaponService'];
    function CpuService(weaponService) {
        var service = {
            getRandomCpuWeapon: getRandomCpuWeapon
        };

        return service;

        ////////////////
        function getRandomCpuWeapon(manyWeapons) {
           var randomNumber = Math.floor((Math.random() * manyWeapons));
           return weaponService.get()[randomNumber];
        }
    }
})();