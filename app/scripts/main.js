require.config({
    paths:{
        jquery:'jquery/jquery-min',
        underscore:'underscore/underscore-min',
        backbone:'../bower_components/backbone/backbone'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        'backbone': {
            deps: ['../bower_components/underscore/underscore', 'jquery'],
            exports: 'Backbone'
        },
        waitSeconds: 15
    }
});

/*require(['scripts/app'], function (app) {
    console.log(app); // Empty object here?
});
*/

/*
require(['backbone'], function(Backbone) {
	console.log(Backbone);
});
*/

require(['scripts/models/slide'], function(SlideModel) {
	console.log(new SlideModel);
});

