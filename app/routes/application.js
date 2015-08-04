import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('tasks', this.store.find('task'));
    controller.set('tools', this.store.find('tool'));
  },
  actions: {
    error: function(error) {
      // Todo: Show alert
      // Report to Rollbar
      Rollbar.error("Route error: " + error, error);
      // Report to Sentry
      Raven.captureException(error);
      return true;
    }
  }
});
