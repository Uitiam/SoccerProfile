var request = function(u, params, func) {
    //Requests PHP file
    var http = new XMLHttpRequest();
    //Php file requested
    var url = u;
    var count = 0;
    http.onreadystatechange = function() {

            if(http.status == 200 && count < 2) {
                count++;
                //do a function
                func(JSON.parse(http.responseText));
                //displayCV(JSON.parse(http.responseText));
            }
    }
    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.send(params);
}

//Variables being sent
//var params = "&firstName=" + player.getPlayerId;
