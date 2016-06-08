(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://popping-inferno-546.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
      
    return {
      all: rooms,
        
      add: function(room) {
        rooms.$add(room);
      }
        
        
    };
  }

  angular
    .module('chatRoom')
    .factory('Room', ['$firebaseArray', Room]);
})();