import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (params.task_id === 'new') {
      return this.store.createRecord('task');
    }
    else {
      return this.store.find('task', params.task_id);
    }
  },
  afterModel: function(model) {
    var title = 'Tool Directory - ' + model.get('title') + ' (' + model.get('subTitle') + ')';
    Ember.$(document).attr('title', title);
  }
});
