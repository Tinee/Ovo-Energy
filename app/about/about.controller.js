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
            vm.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sapiente, deserunt, magni similique nisi nesciunt totam perspiciatis officiis inventore facilis provident dolores, quod quas soluta obcaecati possimus amet neque iusto dolorem aperiam quam sunt. Sunt dolor saepe minus eius sapiente, earum neque, odit eum. Alias quos ipsa deserunt consequatur saepe!';
        }
    }
})();
