(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = [];

    function SignupController() {
        var $ctrl = this;

        $ctrl.firstName = null;
        $ctrl.lastName = null;
        $ctrl.emailAddress = null;
        $ctrl.phoneNumber = null;
        $ctrl.favoriteDish = null;

        $ctrl.signup = function () {

        }
    }

})();
