var requirejs = require("requirejs");

requirejs.config({
    "baseUrl": "../../",
    "removeCombined": true,
    "paths": {
        'jQuery': 'js/base/lib/jquery-1.10.2.min',
        'requireLib': 'js/base/lib/require.min',
        'lodash': 'js/base/lib/lodash.min',
        'page': 'js/page',
        'section': 'js/section',
        'module': 'js/module',
        'service': 'js/service'
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