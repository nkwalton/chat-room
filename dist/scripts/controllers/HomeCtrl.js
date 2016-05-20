 // the home controller- injected the Room service and the $firebaseArray dependency.
 // made a $scope variable (rooms), equal all of the Room objects (in an array).


 (function() {
        function HomeCtrl(Room, $firebaseArray) {
          $scope.rooms = Room.all; 
        }
 

        angular
            .module('chatRoom', [])
            .controller('HomeCtrl', ['Room', '$firebaseArray', HomeCtrl]);
 })();


// --------------------------------------------------
//  function LandingCtrl() {
//      this.heroTitle = "Turn the Music Up!";
//  }
//Using the 'this' keyword adds heroTitle as a property on the LandingCtrl's $scope object. $scope properties contain the model, or data, that the view will present, and are available to the template at the point in the DOM where the controller is registered. The LandingCtrl for Bloc Jams is registered for the landing.html template.

// then, corresponding to the template... 
//
//  <section class="hero-content">
//      <h1 class="hero-title">{{ landing.heroTitle }}</h1>
//  </section>
