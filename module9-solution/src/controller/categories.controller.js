(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    // ---------------------
    // Controller for populating the categories list
    // ---------------------
    CategoriesController.$inject = ['MenuDataService', 'categoriesResult'];

    function CategoriesController(MenuDataService, categoriesResult) {
        var catCtrl = this;
        catCtrl.categories = categoriesResult.data;
    }

})();
