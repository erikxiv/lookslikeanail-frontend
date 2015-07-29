import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    details: function(tool) {
      this.transitionTo('tool', tool);
    },
    toggle: function(tool) {
      var wasExpanded = tool.get('isExpanded');
      this.model.setEach('isExpanded', false);
      tool.set('isExpanded', ! wasExpanded);
    },
    expand: function(tool) {
      tool.set('isExpanded', true);
    },
    contract: function(tool) {
      tool.set('isExpanded', false);
    }
  }
});
