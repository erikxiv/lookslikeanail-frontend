import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('concept');
  },
  afterModel: function() {
    var title = 'Tool Directory - Concepts';
    Ember.$(document).attr('title', title);
  }
});
