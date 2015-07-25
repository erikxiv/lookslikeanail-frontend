import Ember from 'ember';

export default Ember.Route.extend({
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
