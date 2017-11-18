(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    // ---------------------
    // Controller for populating the categories list
    // ---------------------
    ItemsController.$inject = ['MenuDataService', 'itemsResult'];

    function ItemsController(MenuDataService, itemsResult) {
        var itemCtrl = this;
        itemCtrl.items = itemsResult.data.menu_items;
        itemCtrl.categoryData = itemsResult.data.category;
    }

})();
