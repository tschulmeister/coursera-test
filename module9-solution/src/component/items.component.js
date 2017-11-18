(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemsList', {
            templateUrl: 'src/template/items-list.template.html',
            bindings: {
                items: '<'
            }
        });

})();
