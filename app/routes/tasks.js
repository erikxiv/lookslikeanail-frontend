import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('task');
  },
  afterModel: function() {
    var title = 'Tool Directory - Tasks';
    Ember.$(document).attr('title', title);
  }
});
