'use strict';

describe("EventListController", function(){
    var $controllerConstructor, scope, mockEventData;

    beforeEach(module("eventsApp")); //musimy dostać się do mmodułu, który posiada testowany kontroller

    //aby testować czy jakaś własność została dodana do scopu kontrolera, musimy 
    //zainicjować testowy kontroller oraz jego scope - robimy to tworząć przed każdym testem
    //nowy kontroller oraz przy pomocy $rootScope nowy scope do nowo utworzonego kontrollera
    //poniżej inicjumemy servis przy pomocy którego tworzymy nowy kontroller
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function(){}});
    }));

    it("should set the scope.events to the result of eventData.getAllEvents() method", function(){
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);
        //poniżej inicjujemy nowy kontroller, pierwszy parametr to jego nazwa, drugi to obiekt 
        //w którym zapisane są parametry testowanego kontrolera (jako pola) a własności pól to 
        //nowo utworzone mocki
        $controllerConstructor("EventListController", {"$scope":scope, "eventData": mockEventData});
        expect(scope.events).toBe(mockEvents);
    });
});