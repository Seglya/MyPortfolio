
window.onload = function () {
    CanvasJS.addColorSet(
        "greyBlueSet",
        [
            "rgb(13, 77, 79)",
            "rgb(14, 87, 89)",
            "rgb(17, 102, 105)",
            "rgb(27,147,151)",
            "rgb(30, 181, 186)",
            "rgb(32, 194, 199)",
            "rgb(151, 205, 207)",
            "rgb(197, 223, 224)",
            "rgb(203, 209, 209)"
        ]
    );
	var chart = new CanvasJS.Chart("chartContainer",
	{
        theme: "light2",
        colorSet: "greyBlueSet",
        title:{
		
		},		
		data: [
		{     
              
			type: "pie",
			showInLegend: true,
			toolTipContent: "#percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 35, indexLabel: "C#" },
				{  y: 28, indexLabel: "ASP.Net" },
				{  y: 10, indexLabel: "HTML/CSS" },
				{  y: 3, indexLabel: "JScript"},
				{  y: 8, indexLabel: "SQL" },
                {  y: 5, indexLabel: "Git"},
                {  y: 7, indexLabel: "EntityFramework"},
                {  y: 1, indexLabel: "Angular8"},
                {  y: 3, indexLabel: "SSMS"},
			]
		}
		]
	});
	chart.render();
}


