
window.onload = function() {
    console.log("hey hey hey");
    var accountType = "Coach";
    var ageGroupSelected;
    var teamSelected;
    var playerSelected;
    var accordion = [];

    //populates Evaluation page
    function populateEvalPage(info) {
    }

    //gets Evaluation info
    function getEval(playerID) {

    }

    //clears Evaluation page
    function clearEvalPage() {

    }

    //Switches Evaluation page
    function switchEvalPage() {
    }

    //Gets player's in the team
    function getPlayers(team) {

    }

    //gets teams in the agegroup
    function getTeams(ageGroup) {

    }

    //gets agegroups in club
    function getAgeGroups (ageGroups) {

    }
    /*
    //if account is a TD
    if(accountType == "TD") {
        aja()
        .method("get")
        .url('/api/getAgeGroups')
        .queryString({
            email:"testTD@test.com"
        })
        .on('200', getAgeGroups)
        .on('404', function(response){
            console.log("Age Groups not found");
        })
        .go();
    }

    //If account is a Coach or Age group coordinator
    if(accountType != "TD") {
        aja()
        .method("get")
        .url('/api/getTeams')
        .queryString({
            email:"testCoach@test.com"
        })
        .on('200', getTeams)
        .on('404', function(response){
            console.log("Teams not found");
        })
        .go();
    }*/

    //panel-group
    var panelGroup = document.getElementById("accordion");

    createAccordion();
    populateEval();

    function createAccordion() {

        for(var a = 0; a < 1; a++) {
            //creates age panel if account is TD
            if(accountType == "TD") {
                //Age panel
                var agePanel = document.createElement("div");
                agePanel.setAttribute("class","panel panel-danger");

                panelGroup.appendChild(agePanel);

                var agePanelHeading = document.createElement("div");
                agePanelHeading.setAttribute("class", "panel-heading");

                agePanel.appendChild(agePanelHeading);

                var agePanelHeader = document.createElement("h1");
                agePanelHeader.setAttribute("class", "panel-title");
                agePanelHeader.setAttribute("id", "header");

                agePanelHeading.appendChild(agePanelHeader);

                var ageGroupButton = document.createElement("a");
                ageGroupButton.setAttribute("data-toggle", "collapse");
                ageGroupButton.setAttribute("data-parent", "#accordion");
                ageGroupButton.setAttribute("href", "#collapseU" + a);

                ageGroupText = document.createTextNode("U" + (5 + a));

                ageGroupButton.appendChild(ageGroupText);

                agePanelHeader.appendChild(ageGroupButton);

                var ageGlyphicon = document.createElement("span");
                ageGlyphicon.setAttribute("class", "glyphicon glyphicon-chevron-right");
                ageGlyphicon.style.cssFloat = "right";

                ageGroupButton.appendChild(ageGlyphicon);
            }


            //Team panel
            var teamPanelGroup = document.createElement("div");
            teamPanelGroup.setAttribute("id", "collapseU" + a);

            if(accountType == "TD") {
                teamPanelGroup.setAttribute("class", "panel-collapse collapse");
                teamPanelGroup.setAttribute("class", "panel-group");
            } else {
                agePanel.setAttribute("class","panel panel-danger");
            }

            //Checking account type
            if(accountType == "TD") {
                agePanel.appendChild(teamPanelGroup);
            } else {
                panelGroup.appendChild(teamPanelGroup);
            }

            for( var t = 0; t < 4; t++) {

                var teamPanel = document.createElement("div");
                teamPanel.setAttribute("class", "panel panel-default");

                teamPanelGroup.appendChild(teamPanel);

                var teamPanelHeading = document.createElement("div");
                teamPanelHeading.setAttribute("class", "panel-heading");

                teamPanel.appendChild(teamPanelHeading);

                var teamPanelHeader = document.createElement("h2");
                teamPanelHeader.setAttribute("class", "panel-title");

                teamPanelHeading.appendChild(teamPanelHeader);

                var teamButton = document.createElement("a");
                teamButton.setAttribute("data-toggle", "collapse");
                teamButton.setAttribute("data-parent", "#collapseU" + a);
                teamButton.setAttribute("href", "#collapse" + a + t);

                var teamText = document.createTextNode("Team #" + (t + 1));

                teamButton.appendChild(teamText);

                teamPanelHeader.appendChild(teamButton);

                teamPanelHeader.style.textAlign = "center";

                var teamGlyphicon = document.createElement("span");
                teamGlyphicon.setAttribute("class", "glyphicon glyphicon-chevron-down");
                teamGlyphicon.style.cssFloat = "right";

                teamButton.appendChild(teamGlyphicon);

                var playerCollapseGroup = document.createElement("div");
                playerCollapseGroup.setAttribute("id", "collapse" + a + t);
                playerCollapseGroup.setAttribute("class", "panel-collapse collapse");

                teamPanelGroup.appendChild(playerCollapseGroup);

                var playerPanel = document.createElement("div");
                playerPanel.setAttribute("class", "panel-body");

                playerCollapseGroup.appendChild(playerPanel);

                var playerTable = document.createElement("table");
                playerTable.setAttribute("class", "table table-striped table-condensed");

                playerPanel.appendChild(playerTable);

                playerPanel.style.textAlign = "center";

                var playerTableBody = document.createElement("tbody");

                for(var p = 0; p < 3; p++) {

                    var playerTr = document.createElement("tr");
                    var playerTd = document.createElement("td");

                    var playerText = document.createTextNode("Player #" + (p + 1));

                    playerTd.appendChild(playerText);

                    playerTr.appendChild(playerTd);

                    playerTableBody.appendChild(playerTr);

                    playerTable.appendChild(playerTableBody);

                }

            }

        }

    }

    function populateEval() {

        var evalDiv = document.getElementById("evalScreen");
        var evalTable = document.createElement("table");
        var evalTableHead = document.createElement("thead");
        var evalTableHeader = document.createElement("th");
        var evalTitle = document.createElement("h3");
        var evalTitleText = document.createTextNode("Practice");
        var evalBody =  document.createElement("tbody");
        var infoRow = document.createElement("tr");
        var dateTD = document.createElement("td");
        var dateText = document.createTextNode("Date: 00-00-00");
        var evalTypeTD = document.createElement("td");
        var evalTypeText = document.createTextNode(" Reviewer: Coach");


        evalTable.setAttribute("class", "table");
        evalTable.setAttribute("id", "EvalTable");

        //evalTableHead.setAttribute("class", "thead-inverse");
        evalTableHeader.setAttribute("colspan", "2");

        evalTitle.appendChild(evalTitleText);
        evalTableHeader.appendChild(evalTitle);
        evalTableHead.appendChild(evalTableHeader);


        dateTD.appendChild(dateText);
        evalTypeTD.appendChild(evalTypeText);


        infoRow.appendChild(dateTD);
        infoRow.appendChild(evalTypeTD);

        evalBody.appendChild(infoRow);

        for(var z = 0; z < 3; z++) {
            var attributeRow = document.createElement("tr");
            var attributeTD = document.createElement("td");
            var text;
            if(z == 0){
                text = "Attendence: Present";
            } else if(z == 1){
                text = "Ability: 4";
            } else {
                text = "Attitude: 5";
            }
            var attributeText = document.createTextNode(text);

            attributeTD.appendChild(attributeText);
            attributeRow.appendChild(attributeTD);

            evalBody.appendChild(attributeRow);
        }
        evalTable.appendChild(evalBody);
        evalTable.appendChild(evalTableHead);
        evalDiv.appendChild(evalTable);

    }


}
