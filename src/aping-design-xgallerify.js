"use strict";

angular.module('jtt_aping_design_xgallerify', [])
    .controller('apingXgallerifyDesignController', ['$scope', function ($scope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });
    }]);
