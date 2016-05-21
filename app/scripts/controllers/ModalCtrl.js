// the home controller- injected the Room service and the $firebaseArray dependency.
 // made a $scope variable (rooms), equal all of the Room objects (in an array).


 (function() {
        function ModalCtrl(Room, $firebaseArray) {
          $scope.rooms = Room.all; 
        }
 

        angular
            .module('chatRoom', [])
            .controller('ModalCtrl', ['Room', '$firebaseArray', HomeCtrl]);
 })();






// the home controller- injected the Room service and the $firebaseArray dependency.
 // made a $scope variable (rooms), equal all of the Room objects (in an array).

//
// (function() {
//        function HomeCtrl(Room, $firebaseArray) {
//          $scope.rooms = Room.all; 
//        }
// 
//
//        angular
//            .module('chatRoom', [])
//            .controller('HomeCtrl', ['Room', '$firebaseArray', HomeCtrl]);
// })();
