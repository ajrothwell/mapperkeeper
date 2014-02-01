
// js/views/mappages.js

var app = app || {};

// define the MappageView object class
app.MappageView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#item-template').html()),
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this; // enable chained calls
	}
});
