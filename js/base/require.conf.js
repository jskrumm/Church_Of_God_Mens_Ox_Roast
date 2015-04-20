var requirejs = require("requirejs");

requirejs.config({
    "removeCombined": true,
    "paths": {
        'jQuery': 'lib/jquery-1.10.2.min',
        'lodash': 'lib/lodash.min',
        'page': '../page',
        'section': '../section',
        'module': '../module',
        'service': '../service'
    },
    "shim": {
        'jQuery': {
            "exports": '$'
        },
        'underscore': {
            "exports": '_'
        }
    }
});