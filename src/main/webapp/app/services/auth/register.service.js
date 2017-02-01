(function () {
    'use strict';

    angular
        .module('avaliacao360FelipeApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
