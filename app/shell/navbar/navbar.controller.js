(function () {
  'use strict';

  angular
    .module('app.shell')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['NavbarService'];
  function NavbarController(navbarService) {
    var vm = this;

    vm.brand = '';
    vm.menuItems = [];

    activate();


    function activate() {
      vm.brand = 'Evo-Energy'
      vm.menuItems = navbarService.getItems()
    }
  }
})();
