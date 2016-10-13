(function () {
  'use strict';

  angular
    .module('app.directives')
    .directive('HistoryDirective', HistoryDirective);

  HistoryDirective.$inject = [];
  function HistoryDirective() {
    var directive = {
      templateUrl: './history.html',
      restrict: 'E',
      scope: {
        history: '='
      }
    };
  return directive;
  }
})();
