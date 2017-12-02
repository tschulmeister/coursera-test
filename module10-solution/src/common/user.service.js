(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);


    UserService.$inject = [];

    function UserService() {
        var service = this;

        service.user = null;

        service.setUser = function (user) {
            service.user = user;
        };

        service.getUser = function () {
            return service.user;
        };

    }


})();
