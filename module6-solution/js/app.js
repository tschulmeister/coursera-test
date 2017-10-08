(function () {
    'use strict';
    angular.module('lunchCheckApp', [])
        .controller('LunchCheckController', function ($scope) {
            $scope.lunchMessage = "";

            $scope.checkLunch = function (lunchItems) {
                if (!lunchItems || 0 === lunchItems.length)
                    $scope.lunchMessage = "Please enter data first";
                else {
                    var items = lunchItems.split(',');

                    if (items.length < 4)
                        $scope.lunchMessage = "Enjoy!";
                    else
                        $scope.lunchMessage = "Too Much!";
                }
            }
        });
})();
