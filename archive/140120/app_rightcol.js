
// js/views/app.js

var app = app || {};

app.RightColView = Backbone.View.extend({
	el: '#homemainpage',
	initialize: function () {
//		app.leftMappageCollection.each(this.addLeftOne, this);
		app.rightMappageCollection.each(this.addRightOne, this);
	},
/*	addLeftOne: function(aModelInstance){
		var view = new app.MappageView({
			model: aModelInstance
		});
		$('#leftColumn').append(view.render().$el);
	}
*/	addRightOne: function(aModelInstance){
		var view = new app.MappageView({
			model: aModelInstance
		});
		$('#rightColumn').append(view.render().$el);
	}
});