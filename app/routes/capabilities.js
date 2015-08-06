import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('capability');
  },
  afterModel: function() {
    var title = 'Tool Directory - Capabilities';
    Ember.$(document).attr('title', title);
  }
});
