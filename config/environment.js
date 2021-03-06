/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'myapp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    rollbarToken: "f439d4bed0564ed9b93509e8834b71fd",
    rollbarVerbose: false,
    rollbarCodeVersion: process.env.TRAVIS_COMMIT || 'unknown',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' boot2docker:35729 *.cloudfront.net",
      'font-src': "'self'",
      'connect-src': "'self' ws://boot2docker:35729 looks-like-a-nail-backend.herokuapp.com api.rollbar.com boot2dockerapi hex.pm api.github.com dbpedia.org",
      'img-src': "'self' *.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': ""
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: null,
      API_NAMESPACE: 'api'
    }
  };

  if (environment === 'development') {
    // ENV.APP.API_HOST = 'http://looks-like-a-nail-backend.herokuapp.com';
    // ENV.APP.API_NAMESPACE = 'api/v1';
    ENV.APP.API_HOST = 'http://boot2dockerapi';
    ENV.APP.API_NAMESPACE = 'api';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.rollbarVerbose = true
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
      ENV.APP.API_HOST = 'http://looks-like-a-nail-backend.herokuapp.com';
      ENV.APP.API_NAMESPACE = 'api/v1';
  }

  return ENV;
};
