(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('MenuItemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

    function FoundItems() {
        return {
            templateUrl: 'directives/foundItems.html'
        };
    }


    // ---------------------
    // controller for the "to buy" list
    // ---------------------
    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowController = this;
        narrowController.found = [];

        narrowController.searchForItems = function (searchTerm) {
            narrowController.found = MenuSearchService.getMatchedMenuItems(searchTerm);
        }
    }

    // ---------------------
    // service for menu search
    // ---------------------
    MenuSearchService.$inject = ['$http', 'MenuItemsUrl'];

    function MenuSearchService($http, MenuItemsUrl) {
        var searchService = this;

        searchService.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: MenuItemsUrl
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = [];

                // return processed items
                return foundItems;
            });
        }
    }

})();
