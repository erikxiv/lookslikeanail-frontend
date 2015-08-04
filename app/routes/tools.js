import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('tool');
  },
  afterModel: function() {
    var title = 'Tool Directory';
    Ember.$(document).attr('title', title);
  }
});
