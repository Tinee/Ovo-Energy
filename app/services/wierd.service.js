(function() {
'use strict';

  angular
    .module('app.services')
    .factory('DataService', DataService);

  DataService.$inject = ['$resource'];
  function DataService() {
    var service = {
      wierdGet:wierdGet
    };

    return service;

    ////////////////
    function wierdGet() { }
  }
})();
