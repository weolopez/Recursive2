(function () {
    'use strict';

    angular.module('rest-services.gamelist', ['app.constants'])
        .service('GamesService', GamesService);

    GamesService.$inject = ['$http', 'RestConstants'];

    function GamesService($http, RestConstants) {
        var vm = this;
        vm.list = [];
        var REQUEST = "?serviceType=DISCONNECT";

        function init() {
            vm.getList({ value: REQUEST });
        }
        function appendTransform(defaults, transform) {
            // We can't guarantee that the default transformation is an array
            defaults = angular.isArray(defaults) ? defaults : [defaults];
            // Append the new transformation to the defaults
            return defaults.concat(transform);
        }
        vm.getList = function (param) {
            $http.get(RestConstants.gamelist.supplant(param)
                ).then(function (result) {
                    if (vm.preprocess) {
                                vm.list = vm.preprocess(result.data);
                            }
                            else vm.list = result.data;
                });
        };
        init();
    }
})();