var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  paths: {
    'jQuery': 'js/common/lib/jquery-1.10.2.min',
    'lodash': 'js/common/lib/lodash.min',
    'handlebars': 'js/common/lib/handlebars.runtime-v3.0.1',
    'templates': 'js/common/compiledTemplates',
    'page': 'js/page',
    'section': 'js/section',
    'module': 'js/module',
    'service': 'js/service'
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'lodash' : {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
