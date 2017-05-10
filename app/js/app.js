'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngSanitize', 'ngCookies', 'ngRoute']);
    eventsApp.config(function($routeProvider){
        $routeProvider
            .when('/NewEvent', {
                templateUrl: "templates/NewEvent.html",
                controller: "EditEventController"
            })
            .when('/events', {
                templateUrl: "templates/EventList.html",
                controller: "EventListController"
            })
            .when('/event/:eventId', {
                templateUrl: "templates/EventDetails.html",
                controller: "EventController"
            })
            .when('/EditProfile', {
                templateUrl: "templates/EditProfile.html",
                controller: "EditProfileController"
            })
            .when('/SampleDirective', {
                templateUrl: "templates/SampleDirective.html",
                controller: "SampleDirectiveController"
            })
            .otherwise({redirectTo: '/events'});
    });
