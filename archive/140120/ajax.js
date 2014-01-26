
// js/ajax.js

var app = app || {};

app.csvData;
app.allViews = [];

$.ajax({
	type: "GET",
	url: "data/mappages.csv",
	dataType: "text",
	success: function(data) {processData(data);}
});

processData = function(someData) {
	app.csvData = $.csv.toObjects(someData);
/*	app.csvData = someData;
	app.jsonData = csvjson.csv2json(someData, {
		delim: ",",
		textdelim: "\""
	});
*/
//	alert(app.jsonData.rows[0])
//	new app.AppView();
	
	for (var i=0; i<app.csvData.length; i++){
		app.allViews[i] = new app.Mappage(app.csvData[i]);
	}
	//app.myMappage_03 = new app.Mappage(app.csvData[0]);
	
	for (var i=0; i<app.allViews.length; i++){
		app.myMappageCollection.add(app.allViews[i]);
	}
	new app.AppView();
};

/*
startBackbone = function(){
	new app.AppView();
};
*/