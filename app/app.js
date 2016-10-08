(function () {
  'use strict';

  angular.module('app', [
    'app.core',

    'app.game'
  ])
    .config([
      '$stateProvider',
      '$locationProvider',
      '$urlRouterProvider',
      Routes]);

  function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/game/game.html',
        controller: 'GameController as vm',
      });

    $locationProvider.html5Mode(true);
  }

})();
