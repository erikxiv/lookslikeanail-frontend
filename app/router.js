import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('error', { path: '/error/:error_id' });
  this.route('tool', { path: '/tools/:tool_id' });
  this.route('tools');
  this.route('task', { path: '/tasks/:task_id' });
  this.route('tasks');
  //set up all of your known routes, and then...
  this.route("404", { path: "*path"});
});

export default Router;
