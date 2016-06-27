//Player's progression graph at top of player evaluation screen
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
        zoomEnabled: false,
                    animationEnabled: true,
        title:{
            text: "John Michael Progression"
        },
        axisX:{
            valueFormatString:"MMM DD"
        },
        axisY2:{
            valueFormatString:"0",
            maximum: 5.5,
            interval: 1,
            interlacedColor: "#F5F5F5",
            gridColor: "#D7D7D7",
            tickColor: "#D7D7D7"
        },
                    theme: "theme2",
                    toolTip:{
                            shared: true
                    },
        legend:{
            verticalAlign: "bottom",
            horizontalAlign: "center",
            fontSize: 15,
            fontFamily: "Lucida Sans Unicode"

        },
        data: [
        {
            type: "line",
            lineThickness:3,
            axisYType:"secondary",
            showInLegend: true,
            name: "Attitude",
            dataPoints: [
            { x: new Date(2015, 01, 5), y: 1 },
            { x: new Date(2015, 02, 1), y: 1 },
            { x: new Date(2015, 03, 1), y: 2},
            { x: new Date(2015, 04, 1), y: 3},
            { x: new Date(2015, 05, 1), y: 2},
            { x: new Date(2015, 06, 1), y: 3},
            { x: new Date(2015, 07, 1), y: 5},
            { x: new Date(2015, 08, 1), y: 3},
            { x: new Date(2015, 09, 1), y: 4},
            { x: new Date(2015, 10, 1), y: 1},
            { x: new Date(2015, 11, 1), y: 4},
            { x: new Date(2015, 12, 1), y: 5}
            ]
        },
        {
            type: "line",
            lineThickness:3,
            showInLegend: true,
            name: "Attendance",
            axisYType:"secondary",
            dataPoints: [
            { x: new Date(2015, 01, 1), y: 1 },
            { x: new Date(2015, 02, 1), y: 5 },
            { x: new Date(2015, 03, 1), y: 3},
            { x: new Date(2015, 04, 1), y: 3},
            { x: new Date(2015, 05, 1), y: 1},
            { x: new Date(2015, 06, 1), y: 3},
            { x: new Date(2015, 07, 1), y: 2},
            { x: new Date(2015, 08, 1), y: 3},
            { x: new Date(2015, 09, 1), y: 4},
            { x: new Date(2015, 10, 1), y: 3},
            { x: new Date(2015, 11, 1), y: 5},
            { x: new Date(2015, 12, 1), y: 4}


            ]
        },
        {
            type: "line",
            lineThickness:3,
            showInLegend: true,
            name: "Ability",
            axisYType:"secondary",
            dataPoints: [
            { x: new Date(2015, 01, 1), y: 5 },
            { x: new Date(2015, 02, 1), y: 5 },
            { x: new Date(2015, 03, 1), y: 2},
            { x: new Date(2015, 04, 1), y: 4},
            { x: new Date(2015, 05, 1), y: 2},
            { x: new Date(2015, 06, 1), y: 3},
            { x: new Date(2015, 07, 1), y: 5},
            { x: new Date(2015, 08, 1), y: 2},
            { x: new Date(2015, 09, 1), y: 3},
            { x: new Date(2015, 10, 1), y: 5},
            { x: new Date(2015, 11, 1), y: 2},
            { x: new Date(2015, 12, 1), y: 1}


            ]
        }

        ],
      legend: {
        cursor:"pointer",
        itemclick : function(e) {
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
          }
          else {
            e.dataSeries.visible = true;
          }
          chart.render();
        }
      }
    });

chart.render();
}
