(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('MenuItemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");


    // ---------------------
    // directive which displays all "found" items
    // ---------------------
    function FoundItemsDirective() {
        return {
            templateUrl: 'directives/foundItems.html',
            scope: {
                found: '=',
                onRemove: '&'
            }
        };
    }


    // ---------------------
    // controller for the "to buy" list
    // ---------------------
    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowController = this;
        narrowController.found = null;

        narrowController.searchForItems = function (searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {
                // process result and only keep items that match
                narrowController.found =
                    result.data.menu_items.filter(function (menuItem) {
                        return menuItem.name.toLowerCase().indexOf(searchTerm) !== -1;
                    });
            });
        };

        narrowController.removeItem = function (index) {
            if (narrowController.found)
                narrowController.found.splice(index, 1);
        };
    }

    // ---------------------
    // service for menu search. executes the REST call to get the items
    // ---------------------
    MenuSearchService.$inject = ['$http', 'MenuItemsUrl'];

    function MenuSearchService($http, MenuItemsUrl) {
        var searchService = this;

        // return a promise which will contain all menu items
        searchService.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: MenuItemsUrl
            })
        }
    }

})();
