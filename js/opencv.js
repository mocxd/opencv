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

            //find item in array by object's id
            //using 0th index since id should be unique
            var index = $.map( cv, function( elem, index ) {
                if (elem.id === id) {
                    return index;
                }
            })[0];

            //remove the item
            cv.splice(index, 1);
        };

        this.move = function (id, delta) {
            //find the index of the item by its id
            var index = $.map( cv, function( elem, index ) {
                if (elem.id === id) {
                    return index;
                }
            })[0];

            try {
                if (index+delta < 0) {
                    delta = 0;
                } //else if (index+delta > cv.length) {
                    //delta = 1;
                //}
                // insert the item into the specifed position
                console.log('trying move...');
                console.log(id);
                console.log(index);
                console.log(delta);
                console.log(index + delta);
                var tmp = cv[index];
                // remove the original item from the array
                cv.splice(index, 1);
                cv.splice(index + delta, 0, tmp);
                //cv.splice(1, 0, "TESTY");

                // remove the original item from the array
                //cv.splice(index, 1);
            }catch (e) {
                console.log ('Could not move section position.');
                console.log (e);
            }
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

        $scope.remove = function(id) {
            //console.log($scope.sectionId);
            //console.log ('removed');
            SectionService.remove(id);
        };

        $scope.changePos = function (id, delta) {
            //console.log($scope.sectionId);
            SectionService.move(id, delta);
        };
    }])

.controller('SectionPanelController', ['$scope', 'SectionService', 'IdService', function ($scope, SectionService, IdService){
    var ctrl = this;

    this.newPanel = function () {
        var panel = {};
        panel.panelTitle = ctrl.panelTitle;
        panel.type = ctrl.panelType;

        if (typeof ctrl.fields !== 'undefined') {
            panel.fields = JSON.parse(ctrl.fields);
        }
        panel.id = IdService.new();

        console.log(panel);
        SectionService.createNew(panel);
    };
}])

.directive('sectionPanelBtn', ['SectionService', function (SectionService) {
    return {
        restrict: 'E',
        scope: {
            panelTitle: '@',
            panelType: '@',
            fields: '@'
        },
        controller: 'SectionPanelController as panelCtrl',
        bindToController: true,
        // link: function(scope, elem, attrs, controller) {
        //   },
        templateUrl: 'parts/panel-btn.html'
    };
}])

.directive('cvSection', ['SectionService', function(SectionService){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        //scope: {
        //},
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