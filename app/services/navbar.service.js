(function () {
  'use strict';

  angular
    .module('app.services')
    .factory('NavbarService', NavbarService);

  NavbarService.$inject = [];
  function NavbarService() {
    var service = {
      getItems: getItems
    };

    return service;

    ////////////////
    function getItems() {
      return [
        {
          name: 'Game',
          href: 'shell.game'
        },
        {
          name: 'About',
          href: 'shell.about'
        }
      ]
    }
  }
})();
