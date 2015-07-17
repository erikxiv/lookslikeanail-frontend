import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (params.task_id === 'new') {
      return this.store.createRecord('task');
    }
    else {
      return this.store.find('task', params.task_id);
    }
  }
});
