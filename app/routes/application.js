import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('capabilities', this.store.find('capability'));
    controller.set('tools', this.store.find('tool'));
  },
  actions: {
    error: function(error) {
      // Todo: Show alert
      // Report to Rollbar
      if (typeof Rollbar !== "undefined") {
        Rollbar.error("Route error: " + error, error);
      }
      // Report to Sentry
      Raven.captureException(error);
      return true;
    }
  }
});
