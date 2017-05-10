'use strict';

eventsApp.directive('session', function(){
    return {
        restrict: "E", //C - class, E - element, A - attribute, M - comment
        replace: true,
        templateUrl: "/templates/directives/session.html",
        scope: {
            session: "=mySession"
        }
    }
});
