(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('AboutController', AboutController);

    AboutController.$inject = [];
    
    /* @ngInject */
    function AboutController() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();