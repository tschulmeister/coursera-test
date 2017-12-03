(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController)
        .directive('favoriteDish', FavoriteDishDirective);

    SignupController.$inject = ['UserService', 'MenuService'];

    function SignupController(UserService, MenuService) {
        var signupCtrl = this;

        signupCtrl.user = null;
        signupCtrl.noSuchDishError = false;

        signupCtrl.signup = function () {
            // see if the given menu item exists
            signupCtrl.checkItem(signupCtrl.user.favoriteDish);
        };

        signupCtrl.checkItem = function (itemShortName) {
            MenuService.getMenuItem(itemShortName)
                .then(function (rest) {
                    signupCtrl.noSuchDishError = false;
                    UserService.setUser(signupCtrl.user);
                    alert("Your information has been saved")
                })
                .catch(function (fallback) {
                    signupCtrl.noSuchDishError = true;
                });
        }
    }

    FavoriteDishDirective.$inject = ['MenuService', '$q'];

    function FavoriteDishDirective(MenuService, $q) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                ctrl.$asyncValidators.userFavoriteDish = function (modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        // consider empty model valid
                        return $q.resolve();
                    }

                    var def = $q.defer();

                    MenuService.getMenuItem(viewValue)
                        .then(function (rest) {
                            def.resolve();
                        })
                        .catch(function (fallback) {
                            def.reject();
                        });

                    return def.promise;
                };
            }
        };
    }

})();
