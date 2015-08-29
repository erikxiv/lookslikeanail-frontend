import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  },
  afterModel: function() {
    var title = 'Tool Directory - Search';
    Ember.$(document).attr('title', title);
  }
});
