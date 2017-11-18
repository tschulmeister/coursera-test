(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/template/home.template.html'
            })

            // Categories page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/template/categories.template.html',
                controller: 'CategoriesController as catCtrl',
                resolve: {
                    categoriesResult: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            // Items page
            .state('items', {
                url: '/items/{categoryId}',
                templateUrl: 'src/template/items.template.html',
                controller: 'ItemsController as itemCtrl',
                resolve: {
                    itemsResult: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                    }]
                }
            });
    }

})();
