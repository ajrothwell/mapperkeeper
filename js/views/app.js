
// js/views/app.js

var app = app || {};

// define the AppView object class
// doing so will cause things to happed due to the "initialize" section
app.AppView = Backbone.View.extend({
	el: '#homemainpage',
	initialize: function () {
		app.leftMappageCollection.each(this.addLeftOne, this);
		app.rightMappageCollection.each(this.addRightOne, this);
	},
	addLeftOne: function(aModelInstance){
		var view = new app.MappageView({
			model: aModelInstance
		});
		$('#leftColumn').append(view.render().$el);
	},
	addRightOne: function(aModelInstance){
		var view = new app.MappageView({
			model: aModelInstance
		});
		$('#rightColumn').append(view.render().$el);
	}
});