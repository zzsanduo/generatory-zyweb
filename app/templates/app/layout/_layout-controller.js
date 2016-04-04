(function () {
    'use strict';

    angular.module('<%= ngapp %>').controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$rootScope'];

    function LayoutController($rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.appName = "<%= ngapp %>";

        activate();

        function activate() { }
    }
})();
