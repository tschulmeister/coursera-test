(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['UserService', 'MenuService'];

    function SignupController(UserService, MenuService) {
        var signupCtrl = this;

        signupCtrl.user = null;

        signupCtrl.signup = function () {
            // see if the given menu item exists
            MenuService.getMenuItem(signupCtrl.user.favoriteDish)
                .then(function (rest) {
                    signupCtrl.noSuchDishError = false;
                    UserService.setUser(signupCtrl.user);
                    alert("Your information has been saved")
                })
                .catch(function (fallback) {
                    signupCtrl.noSuchDishError = true;
                });
        };
    }

})();
