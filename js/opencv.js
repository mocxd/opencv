(function () {
    'use strict';

angular.module('opencv', ['ngSanitize'])

.controller('SectionController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.edit1 = false;

    $scope.saveFields = function () {
        $scope.descriptionText0 = $sce.trustAsHtml($('#trumbowyg-demo0').val());
        console.log ($scope.descriptionText0);
    };

    $scope.toggleState = function () {
        $('#panel1').collapse('show');
        $scope.edit1 = !$scope.edit1;
        $scope.saveFields();
    };
}])

.directive('wysiwyg', function() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'parts/wysiwyg.html',
    };
})

.directive('wysiwygMulti', function() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'parts/wysiwyg-multi.html',
    };
})

.directive('wysiwygReadonly', function() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'parts/wysiwyg-readonly.html',
    };
})

.directive('wysiwygMultiReadonly', function() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'parts/wysiwyg-multi-readonly.html',
    };
})

;


})();