import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (params.tool_id === 'new') {
      return this.store.createRecord('tool');
    }
    else {
      return this.store.find('tool', params.tool_id);
    }
  }
});
