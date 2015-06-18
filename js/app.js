(function () {
    'use strict';

angular.module('opencv', [])

.controller('SectionController', function(){
	
})

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