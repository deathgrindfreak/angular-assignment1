(function() {
    'use-strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.msg = "";
        $scope.lunch = "";

        $scope.checkLunch = function() {
            var lunch = $scope.lunch.trim().split(/,/);
            if (lunch[0] == "")
                $scope.msg = "";
            else if (lunch.length <= 3)
                $scope.msg = "Enjoy!";
            else
                $scope.msg = "Too much!";
        }
    }
})();
