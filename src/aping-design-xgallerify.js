"use strict";

angular.module('jtt_aping_design_sample', [])
    .controller('apingSampleDesignController', ['$scope', function ($scope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });
    }]);