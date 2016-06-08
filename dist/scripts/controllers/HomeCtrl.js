 // the home controller- injected the Room service and the $firebaseArray dependency.
 // made a $scope variable (rooms), equal all of the Room objects (in an array).


 (function() {
        function HomeCtrl(Room, $uibModal) {
            this.rooms = Room.all;
//            this.rooms =["array"];
            
            this.setRoom = function(room) {
                this.currentRoom = room;
            };
            
            this.open = function() {
                var modalInstance = $uibModal.open({
                    controller: 'ModalCtrl as modal',
                    templateUrl: '/templates/modal.html'
                });
                
            };
            
        }

        angular
            .module('chatRoom')
            .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl])
 })();