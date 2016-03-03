var requirejs = require("requirejs");

requirejs.config({
    "baseUrl": "../../",
    "removeCombined": true,
    "paths": {
        'jQuery': 'js/common/lib/jquery-1.10.2.min',
        'requireLib': 'js/common/lib/require.min',
        'lodash': 'js/common/lib/lodash.min',
        'handlebars': 'js/common/lib/handlebars.runtime-v3.0.1',
        'firebase': 'js/common/lib/firebase',
        'templates': 'js/common/compiledTemplates',
        'page': 'js/page',
        'section': 'js/section',
        'module': 'js/module',
        'service': 'js/service'
    },
    "shim": {
        'jQuery': {
            "exports": '$'
        },
        'lodash' : {
          "exports": '_'
        },
        'handlebars': {
          "exports": 'Handlebars'
        },
        'firebase': {
            "exports": 'Firebase'
        }
    }
});