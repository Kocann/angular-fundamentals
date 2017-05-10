'use strict';

eventsApp.directive('mySample', function($compile){
    return {
        restrict: "C", //C - class, E - element, A - attribute, M - comment
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br>"
    }
});
