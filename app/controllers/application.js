import Ember from 'ember';

export default Ember.Controller.extend({
  alerts: [],
  menuShown: Ember.$(window).width() >= 1024,

  // Alert the user of something
  // Level: success, info, warning, danger
  // Title: Strong title
  // Message: Informative message
  // Duration: Number of ms before the alert is automatically dismissed (0=never)
  alert: function(msg) {
    var that = this;
    var alert = {
      level: msg.level ? 'alert-' + msg.level : 'alert-info',
      title: msg.title || '',
      message: msg.message || msg,
      duration: msg.duration || 0
    };
    this.alerts.clear();
    this.alerts.pushObject(alert);
    if (alert.duration > 0) {
      setTimeout(function() {
        that.alerts.removeObject(alert);
      }, alert.duration);
    }
  },

  // Remove alerts on route change
  // currentPathDidChange: function() {
  //   this.alerts.clear();
  // }.observes('currentPath'),

  // Whether to show tool filters in menu
  toolFilterEnabled: function() {
    return this.currentRouteName === 'tools';
  }.property('currentRouteName'),

  inTransition: function() {
    console.log('inTrans');
    return this.get('target').get('currentState') != this.get('target').get('targetState');
  }.property('target.currentState', 'target.targetState'),

  actions: {
    toggleMenu: function() {
      this.set('menuShown', ! this.get('menuShown'));
      // Make button lose focus (or it will still be highlighted by bootstrap css)
      Ember.$('.navbar-toggle').blur();
    }
  }
});
