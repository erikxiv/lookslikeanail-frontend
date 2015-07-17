import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(error, transition) {
      // Manage your errors
      Ember.onerror(error);

      // substate implementation when returning `true`
      return true;
    }
  }
});
