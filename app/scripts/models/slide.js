define(['backbone'], function(Backbone) {
	var Slide = Backbone.Model.extend({
		defaults: {
			type: 'note',
			title: 'test'
		}

	});

	return Slide;
});