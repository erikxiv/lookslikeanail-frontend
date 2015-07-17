import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    details: function(task) {
      this.transitionTo('task', task);
    },
    expand: function() {
      this.set('isExpanded', true);
    },
    contract: function() {
      this.set('isExpanded', false);
    }
  }
});
