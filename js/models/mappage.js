
// js/models/mappage.js

var app = app || {};

// define the model
app.Mappage = Backbone.Model.extend({
	defaults: {
		column: 'left',
		imgsrc: 'images/FinalSite_sm.jpg',
		title: '',
		href: 'http://129.2.24.163:8080/rothwell/census/',
		description: 'I designed and created this census map from scratch using TopoJSON objects and the D3 JS API.  Use the pre-defined queries to see 2010 data at the state or county level.'
	}
});


// add instances of the model
/*
app.myMappage_01 = new app.Mappage({
	imgsrc: 'images/FinalSite_sm.jpg',
	title: 'USA Census Map',
	href: 'http://129.2.24.163:8080/rothwell/census/',
	description: 'I designed and created this census map from scratch using TopoJSON objects and the D3 JS API.  Use the pre-defined queries to see 2010 data at the state or county level.'
});

app.myMappage_02 = new app.Mappage({
	imgsrc: 'images/counties_comp.jpg',
	title: 'Query USA Counties - Computer Version',
	href: 'http://129.2.24.163:8080/rothwell/FinalProject/computer.html',
	description: 'I designed and created this for an assignment for a Mobile GIS class; this version is adjusted slightly for viewing without a touch screen.  Put a name in on the intro page and you will be able to save data to a MySQL database and review the data later.  The map uses the Google Maps JavaScript API, ArcGIS REST Services, and the ArcGIS Server Link for Google Maps API.'
});
*/