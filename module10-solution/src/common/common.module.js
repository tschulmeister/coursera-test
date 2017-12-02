(function () {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://sheltered-tundra-47598.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
