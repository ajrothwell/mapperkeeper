
// js/app.js

var app = app || {};

app.csvData;
app.allViews = [];

$.ajax({
	type: "GET",
	url: "data/mappages.csv",
	dataType: "text",
	success: function(data) {startSite(data);}
});

startSite = function(someData) {
	app.csvData = $.csv.toObjects(someData);
	for (var i=0; i<app.csvData.length; i++){
		app.allViews[i] = new app.Mappage(app.csvData[i]);
	}
	for (var i=0; i<app.allViews.length; i++){
		if (app.allViews[i].attributes.column == 'left') {
			app.leftMappageCollection.add(app.allViews[i]);
		} else {
			app.rightMappageCollection.add(app.allViews[i]);
		}
	}
	new app.AppView();
};
