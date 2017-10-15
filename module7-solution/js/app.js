(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .factory('ItemFactory', ItemFactory);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buyController = this;

        buyController.items = ShoppingListCheckOffService.getToBuyItems();
        buyController.buyItem = ShoppingListCheckOffService.buyItem;
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtController = this;

        boughtController.items = ShoppingListCheckOffService.getBoughtItems();
    }

    ShoppingListCheckOffService.$inject = ['ItemFactory'];

    function ShoppingListCheckOffService(ItemFactory) {
        var service = this;

        // List of shopping items
        var toBuyItems = [
            ItemFactory("a", 1),
            ItemFactory("b", 2),
            ItemFactory("c", 3),
            ItemFactory("d", 4),
            ItemFactory("e", 5),
            ItemFactory("f", 6),
            ItemFactory("g", 7),
        ];
        var boughtItems = [];

        service.buyItem = function (itemIndex) {
            var item = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    function ItemFactory() {
        return function (name, quantity) {
            return {
                name: name,
                quantity: quantity
            };
        };
    }

})();
