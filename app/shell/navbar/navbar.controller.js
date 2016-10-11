(function () {
    'use strict';

    angular
        .module('app.shell')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = [];
    function NavbarController() {
        var vm = this;

        vm.brand = '';

        activate();

        function activate() {
            vm.brand = 'Evo-Energy'
        }
    }
})();
