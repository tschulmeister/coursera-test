(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/template/categories-list.template.html',
            bindings: {
                categories: '<'
            }
        });

})();
