eventsApp.factory('UserData', function UserData($resource){
    var res = $resource('../data/event/:userName', {userName:'@userName'}, {'query': { method:'GET', isArray: true }});
    return {
        save: function(user){
            return res.save(user);
        }
    }
});