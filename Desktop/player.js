//user Class sets and creates user
function Player(iD) {

    var playerId = iD;

    this.getPlayerId = function() {
        return playerId;
    }

    this.setPlayerId = function(newId) {
        playerId = newId;
        savePID(newId);
    }

}
