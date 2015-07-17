import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tool', { path: '/tools/:tool_id' });
  this.route('tools');
  this.route('task', { path: '/tasks/:task_id' });
  this.route('tasks');
});

export default Router;
