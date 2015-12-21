import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController: function(controller) {
    controller.set('capabilities', this.store.find('capability'));
    controller.set('tools', this.store.find('tool'));
  },
  actions: {
    sessionRequiresAuthentication: function(){
      // For a list of user-configurable options, see:
      // https://auth0.com/docs/libraries/lock/customization

      // This will launch lock.js in popup mode
      var lockOptions = {authParams:{scope: 'openid'}};

      this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions);
    },
    error: function(error) {
      // Todo: Show alert
      // Report to Rollbar
      if (typeof Rollbar !== "undefined") {
        Rollbar.error("Route error: " + error, error);
      }
      return true;
    },
    loading: function() {
      // Return true (e.g. show loading page) only if this is the first page shown
      return ! this.controllerFor('application').get('currentPath');
    }
  }
});
