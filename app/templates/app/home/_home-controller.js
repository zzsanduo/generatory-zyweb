(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('HomeController', HomeController);

    HomeController.$inject = [];
    
    function HomeController() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();