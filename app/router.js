import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('error', { path: '/error/:error_id' });
  this.route('tool', { path: '/tools/:tool_id' });
  this.route('tools');
  this.route('search');
  this.route('capability', { path: '/capabilities/:capability_id' });
  this.route('capabilities');
  this.route('concept', { path: '/concepts/:concept_id' });
  this.route('concepts');
  //set up all of your known routes, and then...
  this.route("404", { path: "*path"});
});

export default Router;
