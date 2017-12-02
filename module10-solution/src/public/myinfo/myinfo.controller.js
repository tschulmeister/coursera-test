(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService', 'MenuService', 'ApiPath'];

    function MyInfoController(UserService, MenuService, ApiPath) {
        var myInfoCtrl = this;

        myInfoCtrl.user = null;
        myInfoCtrl.favoriteDish = null;

        myInfoCtrl.getFavDishData = function () {
            // see if the given menu item exists
            MenuService.getMenuItem(myInfoCtrl.user.favoriteDish)
                .then(function (rest) {
                    myInfoCtrl.favoriteDish = {
                        name: rest.data.name,
                        desc: rest.data.description,
                        img: ApiPath + '/images/' + rest.data.short_name + '.jpg'
                    };
                })
                .catch(function (fallback) {
                    console.error("Could not retrieve data for user's favorite dish")
                });
        };

        myInfoCtrl.user = UserService.getUser();
        if (myInfoCtrl.user)
            myInfoCtrl.getFavDishData();
    }

})();
