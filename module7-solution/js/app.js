(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .factory('ItemFactory', ItemFactory)
        .filter('itemPrice', ItemPriceFilter);

    // ---------------------
    // controller for the "to buy" list
    // ---------------------
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buyController = this;

        // get the list of items to buy
        buyController.items = ShoppingListCheckOffService.getToBuyItems();
        // expose the service's "buyItem" function
        buyController.buyItem = ShoppingListCheckOffService.buyItem;
    }

    // ---------------------
    // controller for the "already bought" list
    // ---------------------
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtController = this;

        // get the list of items already bought
        boughtController.items = ShoppingListCheckOffService.getBoughtItems();
    }

    // ---------------------
    // controller for the "already bought" list
    // ---------------------
    ShoppingListCheckOffService.$inject = ['ItemFactory'];

    function ShoppingListCheckOffService(ItemFactory) {
        var service = this;

        // pre-populate a list of items to buy
        var toBuyItems = [
            ItemFactory("a", 1, 1),
            ItemFactory("b", 2, 2),
            ItemFactory("c", 3, 3),
            ItemFactory("d", 4, 4),
            ItemFactory("e", 5, 5),
            ItemFactory("f", 6, 6),
            ItemFactory("g", 7, 7),
        ];
        // empty list of items already bought
        var boughtItems = [];

        // removes an item from the to-buy list and adds it to the bought list
        service.buyItem = function (itemIndex) {
            var item = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };

        // gets all items to buy
        service.getToBuyItems = function () {
            return toBuyItems;
        };
        // gets all bought items
        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    // ---------------------
    // factory for creating model items
    // ---------------------
    function ItemFactory() {
        return function (name, quantity, pricePerItem) {
            return {
                name: name,
                quantity: quantity,
                pricePerItem: pricePerItem
            };
        };
    }

    // ---------------------
    // filter for calculating the cost of bought items
    // ---------------------
    function ItemPriceFilter() {
        return function (item) {
            return "$$$" + (item.quantity * item.pricePerItem
            );
        }
    }

})();
