(function () {
    'use strict';

    angular.module('rest-services.orderlist', ['app.constants'])
            .service('OrderService', OrderService);

    OrderService.$inject = ['$http', 'RestConstants'];

    function OrderService($http, RestConstants) {
        var vm = this;
        vm.list = [];
        var REQUEST = "?serviceType=DISCONNECT";

        function init() {
            vm.getList({value: REQUEST});
        }
        vm.getList = function (param) {
            $http.get(RestConstants.orderlist.supplant(param)).then(function (result) {
                vm.list = result.data;
            });
        };
        init();
    }
})();