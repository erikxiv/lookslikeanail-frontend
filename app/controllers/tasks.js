import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggle: function(item) {
      var wasExpanded = item.get('isExpanded');
      this.model.setEach('isExpanded', false);
      item.set('isExpanded', ! wasExpanded);
    }
  }
});
