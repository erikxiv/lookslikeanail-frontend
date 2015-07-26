/* global require, module */
var env = process.env.EMBER_ENV;
var config = require('./config/environment')(env);

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  inlineContent: {
    "rollbar" : {
      file: "bower_components/rollbar/dist/rollbar.snippet.js",
      postProcess: function(content) {
        return 'var _rollbarConfig = { accessToken: "' + config.rollbarToken + '", verbose: "' + config.rollbarVerbose + '", captureUncaught: true, payload: { environment: "' + config.environment + '", client: { javascript: { source_map_enabled: true, code_version: "' + config.rollbarCodeVersion + '", guess_uncaught_frames: true } } } };\n' + content;
      }
    }
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
