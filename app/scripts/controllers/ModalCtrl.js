(function() {
  function ModalCtrl(Room, $uibModalInstance, $scope) {

    this.addRoom = function () {
      Room.add($scope.room);
      $uibModalInstance.close(event);
    }
    
    this.cancel = function () {
      $uibModalInstance.dismiss();
    };

  }
    angular
         .module('chatRoom')
         .controller('ModalCtrl', ['Room','$uibModalInstance', '$scope', ModalCtrl]);

})();

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service

//room
//_id = {
//    name: name,
//    messages: [
//        { 
//            content: text,
//            timeStamp
//            author
//        }
//    ]
//    
//}