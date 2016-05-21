(function() {
     function config($stateProvider, $locationProvider) {
         var Firebase = require("firebase");
         //define our app and dependencies(firbase).
         var app = angular.module("chatRoom", ["firebase"]);
         var myFirebaseRef = new Firebase("https://popping-inferno-546.firebaseio.com/");
         
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('home', {
             url: '/',
             controller: 'HomeCtrl as home',
             templateUrl: '/templates/home.html'
         });
     }
    
       /**
       * @function: Room (service)
       * @desc: the Room factory service defines all Room-related queries. uses the $firebaseArray service (returns data in an array), (firebaseRef) refrences to our Firebase database, and injects the ($firebaseArray) into it. 
       rooms = takes the databases data, that defines all Room-related queries, return everything in an array.
       * @param: $firebaseArray {array}.
       * @returns: {array of objects}.
       */
     (function() {
        function Room($firebaseArray) {
            var firebaseRef = new Firebase("https://popping-inferno-546.firebaseio.com/");
            var rooms = $firebaseArray(firebaseRef.child('rooms'));
            
            var messages = $FirebaseArray('rooms');
            // add a new record to the list, add 
            messages.$add({
//                user: "peter pan",
//                text: "Hello world"
            });
            
            return {
                all: rooms
            };
        }
     

        angular
            .module('chatRoom', ['ui.bootstrap'])
            .factory('Room', ['$firebaseArray', Room]);
     })();


    
     // this is the root  module. it will act as a container for different parts of our application.  the first argument passed is the perscribed name of our module ("chatRoom").  the second & third arguments, injects dependencies into an application.
     //To make sure the providers are accessible throughout the application, inject them using the config block on the application's root module. we pass config into the configuration() function.
     angular
         .module('chatRoom', ['ui.router', 'firebase'] )
         .config(config);
 })();

//To make sure the providers are accessible throughout the application, inject them using the config block on the application's root module. Write a config function to pass into the config() function: