'use strict';

eventsApp.controller('EventController', 
  function EventController($scope, eventData, $log, $anchorScroll, $cookieStore, $routeParams) {
    $scope.sortorder = 'name';
    $scope.event = eventData.getEvent($routeParams.eventID);

    $scope.upVoteSession = function(session) {
      if($cookieStore.get("upvote"+session.id) == session.id ){
        return;
      }
      $cookieStore.put("upvote"+session.id, session.id);
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      if($cookieStore.get("downvote"+session.id) == session.id ){
        return;
      }
      $cookieStore.put("downvote"+session.id, session.id);
      session.upVoteCount--;
    }

    $scope.scrollToSession = function(){
      $anchorScroll();
    }
  });