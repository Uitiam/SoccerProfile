//var populate = function()
//set child ID


window.onload = function() {
    //request code taken from http://stackoverflow.com/questions/9713058/sending-post-data-with-a-xmlhttprequest
    var selectedPlayer = 0;
    var playerID = 0;
    var player = new Player(0);

    var nameList = [];
    var idList = [];
    var nameSelected;

    var playerCV = [];


    //get's list of parent's children
    var setNameID = function(playerInfo) {
        for(var i = 0; i < playerInfo.length; i++){
            nameList[i] = playerInfo[i].FirstName;
            idList[i] = playerInfo[i].PlayerID;
        }
        populateNames();
    }

    var getCV = function(CVInfo) {
        for(var i = 0; i < CVInfo.length; i++) {
            playerCV[i] = CVInfo[i];
        }
        populateCV();
    }

    var clearCV = function() {
        var leagueTable = document.getElementById("leagueHistoryBody");
        var tournamentTable = document.getElementById("tournamentsBody");
        var academieTable = document.getElementById("academiesBody");
        var campTable = document.getElementById("campsbody");
        var compHistoryTable = document.getElementById("compHistoryBody");
        var clubTable = document.getElementById("clubsbody");

        var birthYear =  document.getElementById("birthYear");
        var ageTD = document.getElementById("age");
        var ageGroupTD = document.getElementById("ageGroup");
        var clubTD = document.getElementById("club");
        var teamTD = document.getElementById("team");
        var coachTD = document.getElementById("coach");

        birthYear.innerHTML = "";
        ageTD.innerHTML = "";
        ageGroupTD.innerHTML = "";
        clubTD.innerHTML = "";
        teamTD.innerHTML = "";
        coachTD.innerHTML = "";

        if(leagueTable != null){
            leagueTable.innerHTML = "";
        }
        if(tournamentTable != null){
            tournamentTable.innerHTML = "";
        }
        if(academieTable != null){
            academieTable.innerHTML = "";
        }
        if(campTable != null){
            campTable.innerHTML = "";
        }
        if(compHistoryTable != null){
            compHistoryTable.innerHTML = "";
        }
        if(clubTable != null){
            clubTable.innerHTML = "";
        }


    }

    var switchCV = function() {
        if(playerID != 0) {
            clearCV();
        }

        playerID = this.id;
        player.setPlayerId(playerID);
        console.log(player.getPlayerId());
        request("getCV.php", "&playerID=" + playerID, getCV);
        //console.log(playerID);
        //location.reload();
    }

    //requests for list of parent's children
    request("getChildren.php", "&email=testParent@test.com", setNameID);

    if(playerID != 0) {
        request("getCV.php", "&playerID=" + playerID, getCV);
    }


    var populateNames = function() {
        //sidePanel
        var sidePanel= document.getElementById("sidePanel");
        //panel-group
        var panelGroup = document.createElement("div");

        //request("getCV.php", "&playerID=" + idList[0], getCV);

        for(var i = 0; i < nameList.length; i++) {

            panelGroup.setAttribute("class", "panel-group");
            panelGroup.setAttribute("id", "accordion");

            //add panelGroup to side panel
            sidePanel.appendChild(panelGroup);

            //panel
            var panel = document.createElement("div");
            panel.setAttribute("class", "panel panel-danger");
            panel.setAttribute("id", "panel 1");

            //add panel to panel group
            panelGroup.appendChild(panel);

            //panel heading
            var panelHeading = document.createElement("div");
            panelHeading.setAttribute("class", "panel-heading");
            panelHeading.setAttribute("id", "panelHeading1");

            //add panel heading to panel
            panel.appendChild(panelHeading);

            //panel header
            var panelHeader = document.createElement("h1");
            panelHeader.setAttribute("class", "panel-title");
            panelHeader.setAttribute("id", "header");

            panelHeading.appendChild(panelHeader);

            //button element
            var accordion = document.createElement("a");
            accordion.setAttribute("data-toggle", "collapse");
            accordion.setAttribute("data-parent", "#accordion");
            accordion.setAttribute("href", "#collapse" + i);
            accordion.setAttribute("id", idList[i]);
            accordion.onclick = switchCV;

            //button text
            var child1 = document.createTextNode(nameList[i]);

            //adds button text to button
            accordion.appendChild(child1);

            //glyphicon
            var glyphicon = document.createElement("span");
            glyphicon.setAttribute("class", "glyphicon glyphicon-chevron-right");
            glyphicon.style.cssFloat = "right";

            //adds glyphicon to button
            accordion.appendChild(glyphicon);

            //adds button to header
            panelHeader.appendChild(accordion);

            //collapse div
            var collapse = document.createElement("div");
            collapse.setAttribute("id", "collapse" + i);
            collapse.setAttribute("class", "panel-collapse collapse");
            collapse.style.textAlign = "center";

            //adds collapse div to panel
            panel.appendChild(collapse);

            //panel body in collapse div
            var panelBody = document.createElement("div");
            panelBody.setAttribute("class", "panel-body");
            panelBody.setAttribute("id", "panel-body1");

            //adds panel body to collapse div
            collapse.appendChild(panelBody);

            //table in oanel body
            var table = document.createElement("table");
            table.setAttribute("class", "table table-condensed bg-danger");

            //adds table to panel body
            panelBody.appendChild(table);

            //League history
            var leagueRow = document.createElement("tr");
            var leagueData = document.createElement("td");

            var leagueButton = document.createElement("a");
            leagueButton.setAttribute("class", "page-scroll");
            leagueButton.setAttribute("href", "#leagueHistory")

            var leagueH = document.createTextNode("League History");

            leagueButton.appendChild(leagueH);
            leagueData.appendChild(leagueButton);
            leagueRow.appendChild(leagueData);
            table.appendChild(leagueRow);

            //tournaments
            var tournamentsRow = document.createElement("tr");
            var tournamentsData = document.createElement("td");

            var tournamentsButton = document.createElement("a");
            tournamentsButton.setAttribute("class", "page-scroll");
            tournamentsButton.setAttribute("href", "#tournaments")

            var tournamentsH = document.createTextNode("Tournaments");

            tournamentsButton.appendChild(tournamentsH);
            tournamentsData.appendChild(tournamentsButton);
            tournamentsRow.appendChild(tournamentsData);
            table.appendChild(tournamentsRow);

            //academies
            var academiesRow = document.createElement("tr");
            var academiesData = document.createElement("td");

            var academiesButton = document.createElement("a");
            academiesButton.setAttribute("class", "page-scroll");
            academiesButton.setAttribute("href", "#academies")

            var academiesH = document.createTextNode("Academies");

            academiesButton.appendChild(academiesH);
            academiesData.appendChild(academiesButton);
            academiesRow.appendChild(academiesData);
            table.appendChild(academiesRow);

            //camps
            var campsRow = document.createElement("tr");
            var campsData = document.createElement("td");

            var campsButton = document.createElement("a");
            campsButton.setAttribute("class", "page-scroll");
            campsButton.setAttribute("href", "#camps")

            var campsH = document.createTextNode("Camps");

            campsButton.appendChild(campsH);
            campsData.appendChild(campsButton);
            campsRow.appendChild(campsData);
            table.appendChild(campsRow);

            //Compitition History
            var compRow = document.createElement("tr");
            var compData = document.createElement("td");

            var compButton = document.createElement("a");
            compButton.setAttribute("class", "page-scroll");
            compButton.setAttribute("href", "#compHistory")

            var compH = document.createTextNode("Compitition History");

            compButton.appendChild(compH);
            compData.appendChild(compButton);
            compRow.appendChild(compData);
            table.appendChild(compRow);

            //Clubs
            var clubRow = document.createElement("tr");
            var clubData = document.createElement("td");

            var clubButton = document.createElement("a");
            clubButton.setAttribute("class", "page-scroll");
            clubButton.setAttribute("href", "#clubs")

            var clubH = document.createTextNode("Clubs");

            clubButton.appendChild(clubH);
            clubData.appendChild(clubButton);
            clubRow.appendChild(clubData);
            table.appendChild(clubRow);
        }


    }

    var populateCV = function() {
        //Basic information table
        var birthYearTD = document.getElementById("birthYear");
        var birthYearText = document.createTextNode(playerCV[0].YearOfBirth);

        birthYearTD.appendChild(birthYearText);

        var ageTD = document.getElementById("age");
        var ageText = document.createTextNode(playerCV[0].age);

        ageTD.appendChild(ageText);

        var ageGroupTD = document.getElementById("ageGroup");
        var ageGroupText = document.createTextNode("U17");

        ageGroupTD.appendChild(ageGroupText);

        var clubTD = document.getElementById("club");
        var clubText = document.createTextNode("Cliff Ave");

        clubTD.appendChild(clubText);

        var teamTD = document.getElementById("team");
        var teamText = document.createTextNode("Cougars");

        teamTD.appendChild(teamText);

        var coachTD = document.getElementById("coach");
        var coachText = document.createTextNode("Travis");

        coachTD.appendChild(coachText);

        for(var i = 1; i < playerCV.length; i++) {
            var eve = " ";
            var image  = document.createElement("img");



            if(playerCV[i].eventType == "Tournaments") {

                eve = document.getElementById("tournamentsBody");
                image.setAttribute("src", "http://www.iconsdb.com/icons/preview/orange/trophy-xxl.png");
                image.style.height = "50px"

            } else if(playerCV[i].eventType == "League History") {

                eve = document.getElementById("leagueHistoryBody");
                image.setAttribute("src", "https://d30y9cdsu7xlg0.cloudfront.net/png/16635-200.png");
                image.style.height = "60px"

            } else if(playerCV[i].eventType == "Academies") {

                eve = document.getElementById("academiesBody");
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%"

            } else if(playerCV[i].eventType == "Camps") {

                eve = document.getElementById("campsBody");
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%"

            } else if(playerCV[i].eventType == "Competition History") {

                eve = document.getElementById("compHistoryBody");
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%"

            }  else if(playerCV[i].eventType == "Clubs") {

                eve = document.getElementById("clubsBody");
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%"

            } else {
                break;
            }

            image.style.width = "auto"

            var row1 = document.createElement("tr");
            var row2 = document.createElement("tr");

            var imgTD = document.createElement("td");

            var eventNameTD = document.createElement("td");
            var eventName = document.createTextNode(playerCV[i].eventName);

            var dateTD = document.createElement("td");
            var date = document.createTextNode(playerCV[i].date);

            var placementTD = document.createElement("td");
            var placement = document.createTextNode(playerCV[i].information);

            var cityTD = document.createElement("td");
            var city = document.createTextNode(playerCV[i].eventCity);

            imgTD.setAttribute("rowspan", "2");
            imgTD.appendChild(image);

            eventNameTD.appendChild(eventName);
            dateTD.appendChild(date);
            placementTD.appendChild(placement);
            cityTD.appendChild(city);

            row1.appendChild(imgTD);
            row1.appendChild(eventNameTD);
            row1.appendChild(dateTD);

            row2.appendChild(placementTD);
            row2.appendChild(cityTD);

            eve.appendChild(row1);
            eve.appendChild(row2);
        }
    }

}
/*
//when name in list is selected
for(var i = 0; i < window.user.getChildrenLength(); i++) {
if(buttonID == window.user.getPlayer(i).getFirstName()) {
request("getCv.php", "&playerID=" window.user.getPlayer.getPlayerId, populateDivs)
}
}

var populateDivs = function() {

}
/*
var player = new Player();
*/
