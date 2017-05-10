'use strict';

eventsApp.directive('voting', function($compile){
    return {
        restrict: "E", //C - class, E - element, A - attribute, M - comment
        //replace: true,
        templateUrl: "/templates/directives/voting.html",
        scope: {
            upvote: "&", //getting through parent scope (so through session), wiec nie trzeba dawac session jako aprametru w funkcji, jest przekazywana automatycznie
            downvote: "&",
            count: "=" //bierzesz dokładnie integera, który jest po ewaluacji w pasujacym expression
        }
    }
});
