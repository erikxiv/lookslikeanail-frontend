import Ember from 'ember';

export default Ember.Controller.extend({
  menuShown: true,
  toolFilterEnabled: function() {
    return this.currentRouteName === 'tools';
  }.property('currentRouteName'),
  actions: {
    toggleMenu: function() {
      this.set('menuShown', ! this.get('menuShown'));
    }
  }
});
