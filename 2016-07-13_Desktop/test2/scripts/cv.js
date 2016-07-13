//var populate = function()
//set child ID



window.onload = function() {
    $('#aboutLH').popover();
    $('#aboutT').popover();
    $('#aboutA').popover();
    $('#aboutC').popover();
    $('#aboutCH').popover();
    $('#aboutCl').popover();

    //request code taken from http://stackoverflow.com/questions/9713058/sending-post-data-with-a-xmlhttprequest
    var selectedPlayer = 0;
    var playerID = 0;
    var player = new Player(0);

    var fnameList = [];
    var lnameList = [];
    var idList = [];
    var nameSelected;

    var playerCV = [];

    //get's list of parent's children
    function setNameID(playerInfo) {
        for(var i = 0; i < playerInfo.length; i++){
            fnameList[i] = playerInfo[i].firstName;
            lnameList[i] = playerInfo[i].lastName;
            idList[i] = playerInfo[i].playerID;
        }
        populateNames();
    }

    function getCV(CVInfo) {
        playerCV = [];
        for(var i = 0; i < CVInfo.length; i++) {
            playerCV[i] = CVInfo[i];
        }
        populateCV(playerCV);
    }

    function clearCV() {
        $("#leagueHistoryBody").empty();
        $("#tournamentsBody").empty();
        $("#academiesBody").empty();
        $("#campsBody").empty();
        $("#compHistoryBody").empty();
        $("#clubsBody").empty();

        $("#birthYear").empty();
        $("#age").empty();
        $("#ageGroup").empty();
        $("#club").empty();
        $("#team").empty();
        $("#coach").empty();
    }

    function switchCV() {
        if(playerID != 0) {
            clearCV();
        }

        playerID = this.id;
        player.setPlayerId(playerID);

        aja()
          .method("get")
          .url('/api/getCV')
          .queryString({
            'playerID':playerID
          })
          .on('200', function(response){
            getCV(response);
          })
          .go();
    }

    //requests for list of parent's children

    aja()
      .method("get")
      .url('/api/getChildren')
       .queryString({
        email:"testParent@test.com"
      })
      .on('200', setNameID)
      .on('404', function(response){
        console.log("Children not found");
      })
      .go();

    if(playerID != 0) {

        aja()
          .method("get")
          .url('/api/getCV')
          .queryString({
            'playerID':playerID
          })
          .on('200', function(resposne){
            getCV(response);
          })
          .go();
    }


    function populateNames() {
        //sidePanel
        var sidePanel= document.getElementById("sidePanel");
        //panel-group
        var panelGroup = document.createElement("div");


        for(var i = 0; i < fnameList.length; i++) {

            var panel = document.createElement("div");
            var panelHeading = document.createElement("div");
            var panelHeader = document.createElement("h1");
            var accordion = document.createElement("a");
            //button text
            var child1 = document.createTextNode(fnameList[i]);
            var glyphicon = document.createElement("span");
            var collapse = document.createElement("div");

            var panelBody = document.createElement("div");
            var table = document.createElement("table");
            var tableBody = document.createElement("tbody");

            var leagueRow = document.createElement("tr");
            var leagueData = document.createElement("td");
            var leagueButton = document.createElement("a");
            var leagueH = document.createTextNode("League History");

            var tournamentsRow = document.createElement("tr");
            var tournamentsData = document.createElement("td");
            var tournamentsButton = document.createElement("a");
            var tournamentsH = document.createTextNode("Tournaments");

            var academiesRow = document.createElement("tr");
            var academiesData = document.createElement("td");
            var academiesButton = document.createElement("a");
            var academiesH = document.createTextNode("Academies");

            var campsRow = document.createElement("tr");
            var campsData = document.createElement("td");
            var campsButton = document.createElement("a");
            var campsH = document.createTextNode("Camps");

            var compRow = document.createElement("tr");
            var compData = document.createElement("td");
            var compButton = document.createElement("a");
            var compH = document.createTextNode("Competition History");

            var clubRow = document.createElement("tr");
            var clubData = document.createElement("td");
            var clubButton = document.createElement("a");
            var clubH = document.createTextNode("Clubs");

            panelGroup.setAttribute("class", "panel-group");
            panelGroup.setAttribute("id", "accordion");

            //add panelGroup to side panel
            sidePanel.appendChild(panelGroup);

            //panel
            panel.setAttribute("class", "panel panel-danger");
            panel.setAttribute("id", "panel 1");

            //add panel to panel group
            panelGroup.appendChild(panel);

            //panelHeading
            panelHeading.setAttribute("class", "panel-heading");
            panelHeading.setAttribute("id", "panelHeading1");

            //add panel heading to panel
            panel.appendChild(panelHeading);

            //panel header
            panelHeader.setAttribute("class", "panel-title");
            panelHeader.setAttribute("id", "header");

            panelHeading.appendChild(panelHeader);

            //button element
            accordion.setAttribute("data-toggle", "collapse");
            accordion.setAttribute("data-parent", "#accordion");
            accordion.setAttribute("href", "#collapse" + i);
            accordion.setAttribute("id", idList[i]);
            accordion.onclick = switchCV;

            //adds button text to button
            accordion.appendChild(child1);

            //glyphicon
            glyphicon.setAttribute("class", "glyphicon glyphicon-chevron-right");
            glyphicon.style.cssFloat = "right";

            //adds glyphicon to button
            accordion.appendChild(glyphicon);

            //adds button to header
            panelHeader.appendChild(accordion);

            //collapse div
            collapse.setAttribute("id", "collapse" + i);
            collapse.setAttribute("class", "panel-collapse collapse");
            collapse.style.textAlign = "center";

            //adds collapse div to panel
            panel.appendChild(collapse);

            //panel body in collapse div
            panelBody.setAttribute("class", "panel-body");
            panelBody.setAttribute("id", "panel-body1");

            //adds panel body to collapse div
            collapse.appendChild(panelBody);

            //table in oanel body
            table.setAttribute("class", "table table-striped table-condensed bg-danger");

            //adds table to panel body
            panelBody.appendChild(table);

            //League history
            leagueButton.setAttribute("class", "page-scroll");
            leagueButton.setAttribute("href", "#leagueHistory")

            leagueButton.appendChild(leagueH);
            leagueData.appendChild(leagueButton);
            leagueRow.appendChild(leagueData);
            tableBody.appendChild(leagueRow);

            //tournaments
            tournamentsButton.setAttribute("class", "page-scroll");
            tournamentsButton.setAttribute("href", "#tournaments")

            tournamentsButton.appendChild(tournamentsH);
            tournamentsData.appendChild(tournamentsButton);
            tournamentsRow.appendChild(tournamentsData);
            tableBody.appendChild(tournamentsRow);

            //academies
            academiesButton.setAttribute("class", "page-scroll");
            academiesButton.setAttribute("href", "#academies")

            academiesButton.appendChild(academiesH);
            academiesData.appendChild(academiesButton);
            academiesRow.appendChild(academiesData);
            tableBody.appendChild(academiesRow);

            //camps
            campsButton.setAttribute("class", "page-scroll");
            campsButton.setAttribute("href", "#camps")

            campsButton.appendChild(campsH);
            campsData.appendChild(campsButton);
            campsRow.appendChild(campsData);
            tableBody.appendChild(campsRow);

            //Competition History
            compButton.setAttribute("class", "page-scroll");
            compButton.setAttribute("href", "#compHistory");

            compButton.appendChild(compH);
            compData.appendChild(compButton);
            compRow.appendChild(compData);
            tableBody.appendChild(compRow);

            //Clubs
            clubButton.setAttribute("class", "page-scroll");
            clubButton.setAttribute("href", "#clubs")

            clubButton.appendChild(clubH);
            clubData.appendChild(clubButton);
            clubRow.appendChild(clubData);
            tableBody.appendChild(clubRow);

            table.appendChild(tableBody);
        }


    }

    function populateCV(playerCV) {
        var index;
        for(index = 0; index < idList.length; index++) {
            if(playerID == idList[index]) {
                break;
            }
        }
        //Basic information table
        $("#firstName").text(fnameList[index]);
        $("#lastName").text(lnameList[index]);
        $("#nationality").text(playerCV[0].nationality);
        $("#birthYear").text(playerCV[0].dateOfBirth);
        $("#age").text(playerCV[0].age);
        $("#ageGroup").text(playerCV[0].ageGroup);
        $("#club").text(playerCV[0].clubName);
        $("#team").text(playerCV[0].teamName);
        $("#coach").text(playerCV[0].coachFirstName + " " + playerCV[0].coachLastName);


        for(var i = 1; i < playerCV.length; i++) {
            var eve = " ";
            var image  = document.createElement("img");

            var nameLabel;
            var dateLabel;
            var infoLabel;
            var cityLabel = "City: ";

            if(playerCV[i].eventType == "Tournaments") {

                eve = document.getElementById("tournamentsBody");
                nameLabel = "Tournament Name: ";
                dateLabel = "Date: ";
                infoLabel = "Final Placing: ";

                image.setAttribute("src", "http://www.iconsdb.com/icons/preview/orange/trophy-xxl.png");
                image.style.height = "50px";

            } else if(playerCV[i].eventType == "League History") {

                eve = document.getElementById("leagueHistoryBody");
                nameLabel = "League Name: ";
                dateLabel = "Year: ";
                infoLabel = "Club Name: ";
                image.setAttribute("src", "https://d30y9cdsu7xlg0.cloudfront.net/png/16635-200.png");
                image.style.height = "60px";

            } else if(playerCV[i].eventType == "Academies") {

                eve = document.getElementById("academiesBody");
                nameLabel = "Academy Name: ";
                dateLabel = "Year: ";
                infoLabel = "Coach Name: ";
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%";

            } else if(playerCV[i].eventType == "Camps") {

                eve = document.getElementById("campsBody");
                nameLabel = "Camp Name: ";
                dateLabel = "Date: ";
                infoLabel = "Team Name: ";
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%";

            } else if(playerCV[i].eventType == "Competition History") {

                eve = document.getElementById("compHistoryBody");
                nameLabel = "Competition Name: ";
                dateLabel = "Date: ";
                infoLabel = "Final Placing: ";
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%";

            }  else if(playerCV[i].eventType == "Clubs") {

                eve = document.getElementById("clubsBody");
                nameLabel = "Club Name: ";
                dateLabel = "Year: ";
                infoLabel = "Coach Name: ";
                image.setAttribute("src", "http://image.flaticon.com/icons/svg/53/53283.svg");
                image.style.height = "6%";

            } else {
                break;
            }


            image.style.width = "auto";

            var row1 = document.createElement("tr");
            var row2 = document.createElement("tr");

            var imgTD = document.createElement("td");

            var eventNameTD = document.createElement("td");
            var eventName = document.createTextNode(nameLabel + playerCV[i].eventName);

            var dateTD = document.createElement("td");
            var date = document.createTextNode(dateLabel + playerCV[i].eventDate);

            var placementTD = document.createElement("td");
            var placement = document.createTextNode(infoLabel + playerCV[i].information);

            var cityTD = document.createElement("td");
            var city = document.createTextNode(cityLabel + playerCV[i].eventCity);

            imgTD.setAttribute("class", "imageCell");
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
