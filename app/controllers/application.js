import Ember from 'ember';

export default Ember.Controller.extend({
  menuShown: Ember.$(window).width() >= 1024,
  toolFilterEnabled: function() {
    return this.currentRouteName === 'tools';
  }.property('currentRouteName'),
  actions: {
    toggleMenu: function() {
      this.set('menuShown', ! this.get('menuShown'));
      // Make button lose focus (or it will still be highlighted by bootstrap css)
      Ember.$('.navbar-toggle').blur();
    }
  }
});
