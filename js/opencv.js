(function () {
    'use strict';

    angular.module('opencv', ['ngSanitize'])

    .service('SectionService', function(){
        var cv = [];

        this.saveData = function () {
            // save data to model
        };

        this.loadData = function () {
            // load data from model
        };

        this.createNew = function (section) {
            //create new section
            cv.push(section);
        };

        this.getCv = function () {
            return cv;
        };
    })

    .controller('SectionController', ['$scope', '$sce', 'SectionService', function ($scope, $sce, SectionService) {
        $scope.edit1 = false;
        $scope.cv = SectionService.getCv();
        console.log ($scope.cv);

        $scope.saveFields = function () {
            $scope.descriptionText0 = $sce.trustAsHtml($('#trumbowyg-demo0').val());
            console.log ($scope.descriptionText0);
        };

        $scope.toggleState = function () {
            $('#panel1').collapse('show');
            $('#panel1ro').collapse('show');
            $scope.edit1 = !$scope.edit1;
            $scope.saveFields();
        };

        $scope.toggleStateSingle = function() {
            $('#panel0').collapse('show');
            $('#panel0ro').collapse('show');
            $scope.edit0 = !$scope.edit0;
        };
    }])

    .controller('SectionPanelController', ['$scope', 'SectionService', function ($scope, SectionService){
        $scope.newPanel = function () {
            var panel = {};
            //scope variables from directive
            panel.panelTitle = $scope.panelTitle;
            console.log ('controller: ' + $scope.panelTitle);
            SectionService.createNew(panel);
        };
    }])

    .directive('sectionPanelBtn', ['SectionService', function (SectionService) {
        return {
            restrict: 'E',
            scope: {
                //panelTitle: '='
            },
            controller: 'SectionPanelController as panelCtrl',
            bindToController: true,
            link: function(scope, elem, attrs, controller) {
                //Load parameters from view
                scope.panelTitle = attrs.panelTitle;
                console.log ('attrs: ' + attrs.panelTitle);
                console.log ('directive: ' + scope.panelTitle);
                //scope.$apply();
            },
            templateUrl: 'parts/panel-btn.html'
        };
    }])

    .directive('cvSection', ['SectionService', function(SectionService){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'parts/section.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, elem, attrs, controller) {

        }
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