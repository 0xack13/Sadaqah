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

require(['scripts/models/sadaqat'], function(SadaqahModel) {
	console.log(new SadaqahModel);
});

