(function() {
     function config($stateProvider, $locationProvider) {

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
         })
         
         .state('modal', {
                url: '/',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            });
     }
    
     // this is the root  module. it will act as a container for different parts of our application.  the first argument passed is the perscribed name of our module ("chatRoom").  the second & third arguments, injects dependencies into an application.
     //To make sure the providers are accessible throughout the application, inject them using the config block on the application's root module. we pass config into the configuration() function.
    angular
         .module('chatRoom', ['firebase', 'ui.router', 'ui.bootstrap'] )
         .config(config);
 })();

//To make sure the providers are accessible throughout the application, inject them using the config block on the application's root module. Write a config function to pass into the config() function: