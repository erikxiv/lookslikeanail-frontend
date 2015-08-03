import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

// Note down models that do not follow standard pluralism
Ember.Inflector.inflector.uncountable('implements');
Ember.Inflector.inflector.uncountable('isCapableOf');
Ember.Inflector.inflector.uncountable('supports');

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.onerror = function(error) {
  console.log(error);
  Rollbar.error("Uncaught exception: " + error, error);
  // Ember.$.ajax('/error-notification', {
  //   type: 'POST',
  //   data: {
  //     stack: error.stack,
  //     otherInformation: 'exception message'
  //   }
  // });
};

loadInitializers(App, config.modulePrefix);

export default App;
