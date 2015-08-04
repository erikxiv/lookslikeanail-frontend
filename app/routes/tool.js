import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('tasks', this.store.find('task'));
  },
  model: function(params) {
    if (params.tool_id === 'new') {
      return this.store.createRecord('tool', {
        title: 'NewTool',
        subTitle: 'Subtitle',
        description: 'Description goes here'
      });
    }
    else {
      return this.store.find('tool', params.tool_id);
    }
  },
  afterModel: function(model) {
    var title = 'Tool Directory - ' + model.get('title') + ' (' + model.get('subTitle') + ')';
    Ember.$(document).attr('title', title);
  }
});
