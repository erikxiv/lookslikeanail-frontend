import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application"),
  actions: {
    toggle: function(item) {
      var wasExpanded = item.get('isExpanded');
      this.model.setEach('isExpanded', false);
      item.set('isExpanded', ! wasExpanded);
    }
  }
});
