import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

// Note down models that do not follow standard pluralism
Ember.Inflector.inflector.irregular('capability', 'capabilities');
Ember.Inflector.inflector.uncountable('supports');

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// Catch errors and report/visualize them
App.instanceInitializer({
  name: "error-handler",
  initialize: function(instance) {
    var applicationController = instance.container.lookup("controller:application");
    Ember.onerror = function(error) {
      applicationController.alert({
        level: 'danger',
        title: 'Uncaught exception',
        message: error,
        duration: 0
      });
      if (typeof Rollbar !== "undefined") {
        Rollbar.error("Uncaught exception: " + error, error);
      }
    };
  }
});


loadInitializers(App, config.modulePrefix);

export default App;
