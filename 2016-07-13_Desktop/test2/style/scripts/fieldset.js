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

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"League History",
      eventName:inputName,
      date:inputYear,
      information:clubName,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})

$(document).on("click", "#addTournament", function() {
  var inputName = $("#inputNameT").val();
  var inputYear = $("#inputYearT").val();
  var placing = $("#inputPlacingT").val();
  var inputCity = $("#inputCityT").val();
  var inputCountry = $("#inputCountryT").val();

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"Tournaments",
      eventName:inputName,
      date:inputYear,
      information:placing,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})

$(document).on("click", "#academyAdd", function() {
  var inputName = $("#inputNameA").val();
  var inputYear = $("#inputYearA").val();
  var coach = $("#inputCoachA").val();
  var inputCity = $("#inputCityA").val();
  var inputCountry = $("#inputCountryA").val();

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"Academies",
      eventName:inputName,
      date:inputYear,
      information:coach,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})

$(document).on("click", "#campAdd", function() {
  var inputName = $("#inputNameC").val();
  var inputYear = $("#inputYearC").val();
  var team = $("#inputTeamC").val();
  var inputCity = $("#inputCityC").val();
  var inputCountry = $("#inputCountryC").val();

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"Camps",
      eventName:inputName,
      date:inputYear,
      information:team,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})


$(document).on("click", "#compHistoryAdd", function() {
  var inputName = $("#inputNameCH").val();
  var inputYear = $("#inputYearCH").val();
  var coach = $("#inputCoachCH").val();
  var inputCity = $("#inputCityCH").val();
  var inputCountry = $("#inputCountryCH").val();

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"Competition History",
      eventName:inputName,
      date:inputYear,
      information:coach,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})

$(document).on("click", "#clubAdd", function() {
  var inputName = $("#inputNameCl").val();
  var inputYear = $("#inputYearCl").val();
  var coach = $("#inputCoachCl").val();
  var inputCity = $("#inputCityCl").val();
  var inputCountry = $("#inputCountryCl").val();

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"Clubs",
      eventName:inputName,
      date:inputYear,
      information:coach,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})

$(document).on("click", "#addCR", function() {
  var inputName = $("#inputNameCR").val();
  var inputYear = $("#inputYearCR").val();
  var coach = $("#inputCoachCR").val();
  var inputCity = $("#inputCityCR").val();
  var inputCountry = $("#inputCountryCR").val();

  aja()
    .method("post")
    .url('/api/addCV')
    .header('Content-Type','application/x-www-form-urlencoded')
    .queryString({
      'playerID':playerID,
      eventType:"Club Rankings",
      eventName:inputName,
      date:inputYear,
      information:coach,
      eventCity:inputCity,
      eventCountry:inputCountry,
    })
    .on('200', function(response){
      console.log(response);
    })
    .go();

  console.log(playerID + " | " + inputName + " | " + inputYear + " | " + clubName + " | " + inputCity + " | " + inputCountry);
})
