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

        this.remove = function (id) {
            //remove a section

            //find items in array by object's id
            var indices = $.map( cv, function( elem, index ) {
                if (elem.id === id) {
                    return index;
                }
            });

            //using 0th index since id should be unique
            cv.splice(indices[0], 1);
        };

        this.getCv = function () {
            return cv;
        };
    })

    .service('IdService', function(){
        var id = 0;

        this.new = function () {
            return id++;
        };
    })

    .controller('SectionController', ['$scope', '$sce', 'SectionService', function ($scope, $sce, SectionService) {
        //$scope.edit1 = false;
        $scope.cv = SectionService.getCv();
        //console.log ($scope.cv);

        $scope.saveFields = function () {
            //$scope.descriptionText0 = $sce.trustAsHtml($('#trumbowyg-demo0').val());
            //console.log ($scope.descriptionText0);
        };

        $scope.toggleState = function () {
            //$('#panel1').collapse('show');
            //$('#panel1ro').collapse('show');
            //$scope.edit1 = !$scope.edit1;
            //$scope.saveFields();
        };

        $scope.toggleStateSingle = function() {
            //$('#panel0').collapse('show');
            //$('#panel0ro').collapse('show');
            //$scope.edit0 = !$scope.edit0;
        };

        $scope.remove = function() {
            SectionService.remove($scope.sectionId);
        };
    }])

    .controller('SectionPanelController', ['$scope', 'SectionService', 'IdService', function ($scope, SectionService, IdService){
        $scope.newPanel = function () {
            var panel = {};
            //scope variables from directive
            panel.panelTitle = $scope.panelTitle;
            panel.type = $scope.panelType;
            panel.id = IdService.new();
            //console.log ('controller: ' + $scope.panelTitle);
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
                scope.panelType = attrs.panelType;
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
        //scope: {},
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'parts/section.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        //controller: 'SectionController as sectionCtrl',
        //bindToController: true,
        link: function(scope, elem, attrs, controller) {
            //scope.sectionId = attrs.sectionId;
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