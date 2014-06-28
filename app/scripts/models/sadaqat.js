define(['backbone'], function(Backbone) {	
	var Sadaqah = Backbone.Model.extend({
		defaults: {
			type: 'sadaqah',
			title: 'anonymous'
		}

	});

	return Sadaqah;
});