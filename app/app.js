(function () {
  'use strict';

  angular.module('app', [
    'app.core',

    'app.shell',
    'app.game',
    'app.about',

    'app.services'
  ])
    .config([
      '$stateProvider',
      '$locationProvider',
      '$urlRouterProvider',
      Routes]);

  function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('shell', {
        url: '/',
        controller: 'NavbarController as vm',
        templateUrl: '/app/shell/navbar/navbar.html',
      })
      .state('shell.game', {
        url: 'game',
        templateUrl: '/app/game/game.html',
        controller: 'GameController as vm',
      })
      .state('shell.about', {
        url: 'about',
        templateUrl: '/app/about/about.html',
        controller: 'AboutController as vm',
      });

    $locationProvider.html5Mode(true);
  }

})();
