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

require(['scripts/models/sadaqat', 'scripts/views/sadaqat.js'], function(SadaqahModel, search_view) {
	console.log(new SadaqahModel);
});

