(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = [];
    function AboutController() {
        var vm = this;

        vm.lorems = '';

        activate();

        function activate() {
            vm.lorem = 'cusantium quae facere aspernatur. Error minus iusto ipsam maxime veritatis architecto imtum, incidunt blanditiis sed excepturi';
        }
    }
})();