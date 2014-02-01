
// js/collections/mappages.js

var app = app || {};

app.MappageCollection = Backbone.Collection.extend({
	model: app.Mappage
});

// create a collection instance for each column on the webpage
app.leftMappageCollection = new app.MappageCollection()
app.rightMappageCollection = new app.MappageCollection()


