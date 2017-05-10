'use strict';

eventsApp.directive('thumbNails', function($compile){
    return {
        restrict: "E", //C - class, E - element, A - attribute, M - comment
        replace: true,
        templateUrl: "templates/directives/EventThumbs.html",
        scope: {
            event: "=myEvent" //myEvent tłumaczy sie w angularze na my-event (w templatce)
        }
    }
});
