
// js/app.js
// this script is called within the body of index.html


// app is the namespace that holds the backbone-related objects
// this command redefines it to be the existing namespace OR defines it as an empty js object
var app = app || {};

// define empty variable and array within app namespace 
app.csvData;
app.allViews = [];

// use ajax to get the data from data/mappages.csv
$.ajax({
	type: "GET",
	url: "data/mappages.csv",
	dataType: "text",
	success: function(data) {startSite(data);}
});

startSite = function(someData) {
	// consider replacing this next step, as it seems to cause some kind of problem with browsers
	app.csvData = $.csv.toObjects(someData);
	for (var i=0; i<app.csvData.length; i++){
		// create a MODEL instance for each piece of csv data
		// store them in the app.allViews array
		app.allViews[i] = new app.Mappage(app.csvData[i]);
	}
	// fill out the 2 collections from the single array called app.allViews
	for (var i=0; i<app.allViews.length; i++){
		if (app.allViews[i].attributes.column == 'left') {
			app.leftMappageCollection.add(app.allViews[i]);
		} else {
			app.rightMappageCollection.add(app.allViews[i]);
		}
	}
	// simply create a new instance of AppView class to keep going 
	new app.AppView();
};
