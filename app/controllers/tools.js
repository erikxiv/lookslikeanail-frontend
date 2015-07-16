import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    details: function(tool) {
      this.transitionTo('tool', tool);
    },
    expand: function() {
      this.set('isExpanded', true);
    },
    contract: function() {
      this.set('isExpanded', false);
    }
  }
});
