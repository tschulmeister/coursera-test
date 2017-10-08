(function () {
    'use strict';
    angular.module('lunchCheckApp', [])
        .controller('LunchCheckController', function ($scope) {
            $scope.lunchMessage = "";
            // used for setting class on the message
            $scope.goodInput = false;
            $scope.badInput = false;

            $scope.checkLunch = function (lunchItems) {
                if (!lunchItems || 0 === lunchItems.length) {
                    $scope.lunchMessage = "Please enter data first";
                    $scope.setLunchClass(false, true);
                }
                else {
                    // remove any empty items from the array so that they are not counted
                    var items = $scope.cleanArray(lunchItems.split(','));
                    if (items.length === 0) {
                        $scope.lunchMessage = "Please enter data first!";
                        $scope.setLunchClass(false, true);
                    }
                    else if (items.length < 4) {
                        $scope.lunchMessage = "Enjoy!";
                        $scope.setLunchClass(true, false);
                    }
                    else {
                        $scope.lunchMessage = "Too Much!";
                        $scope.setLunchClass(true, false);
                    }
                }
            };

            $scope.setLunchClass = function (goodLunchVal, badLunchVal) {
                $scope.goodInput = goodLunchVal;
                $scope.badInput = badLunchVal;
            };

            // adopted from stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
            // removes empty elements from the array
            $scope.cleanArray = function (actual) {
                var newArray = [];
                for (var i = 0; i < actual.length; i++)
                    if (actual[i])
                        newArray.push(actual[i]);
                return newArray;
            }
        });
})();
