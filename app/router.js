import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('tool', { path: '/tools/new' });
  this.route('tool', { path: '/tools/:tool_id' });
  this.route('tools');
  // this.route('tools/:id');
});

export default Router;
