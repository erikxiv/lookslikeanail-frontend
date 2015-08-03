import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('tasks', this.store.find('task'));
    controller.set('tools', this.store.find('tool'));
  },
  actions: {
    error: function(error) {
      // Manage your errors
      //Ember.onerror(error);
      Rollbar.error("Route error: " + error, error);
      Raven.captureException(error);

      // substate implementation when returning `true`
      return true;
    }
  }
});
