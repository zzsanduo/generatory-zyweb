(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$rootScope'];

    function LayoutController($rootScope) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
