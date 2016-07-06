var playerID;

var savePID = function(playerId) {
  playerID = playerId;
}

$(document).on("click", "#addLeague", function() {
  var inputName = $("#inputLName").val();
  var inputYear = $("#inputYear").val();
  var clubName = $("#inputClub").val();
  var inputCity = $("#inputCity").val();
  var inputCountry = $("#inputCountry").val();

  request("updateCV.php", "&PlayerID = " + playerID + "&eventType = Tournaments" + "&eventName = " + inputName + "&date = " +  inputYear + "&information = " + clubName + "&eventCity = " + inputCity + "&eventCountry = " + inputCountry);
  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})