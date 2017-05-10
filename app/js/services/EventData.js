eventsApp.factory('eventData', function($http, $log, $resource, $routeParams) {
    var resource = $resource('../data/event/:id', {id:'@id'}, {'query': { method:'GET', isArray: true }});
    return {
        getEvent: function(){
            return resource.get({id:$routeParams.eventId});
        },
        save: function(event){
            event.id = 998;
            return resource.save(event);
        },
        getAllEvents: function(){
            return resource.query();
        }

    };
});