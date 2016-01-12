"use strict";

angular.module('jtt_aping_design_xgallerify', ['jtt_angular_xgallerify', 'jtt_imagesLoaded'])
    .controller('apingXgallerifyDesignController', ['$scope', function ($scope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });

        $scope.$on('imagesLoaded.ALWAYS', function() {
            $scope.$broadcast('angular-xGallerify.refresh');
        });
    }]);