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

$uibModal is a service to create modal windows. Creating modals is straightforward: create a template, a controller and reference them when using $uibModal.

The $uibModal service has only one method: open(options).

$uibModal's open function




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
