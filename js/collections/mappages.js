
// js/collections/mappages.js

var app = app || {};

app.MappageCollection = Backbone.Collection.extend({
	model: app.Mappage
});
//app.myMappageCollection = new app.MappageCollection()
app.leftMappageCollection = new app.MappageCollection()
app.rightMappageCollection = new app.MappageCollection()


