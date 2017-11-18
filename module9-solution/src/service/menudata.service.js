(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('CategoriesUrl', "https://davids-restaurant.herokuapp.com/categories.json")
        .constant('ItemsForCategoryUrl', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

    // ---------------------
    // Service for interacting with the restaurant API
    // ---------------------
    MenuDataService.$inject = ['$http', 'CategoriesUrl', 'ItemsForCategoryUrl'];

    function MenuDataService($http, CategoriesUrl, ItemsForCategoryUrl) {
        var menuService = this;

        menuService.getAllCategories = function () {
            return $http({
                method: "GET",
                url: CategoriesUrl
            });
        };

        menuService.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: ItemsForCategoryUrl + categoryShortName
            });
        };
    }

})();
