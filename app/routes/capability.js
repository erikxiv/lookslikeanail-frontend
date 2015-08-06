import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (params.capability_id === 'new') {
      return this.store.createRecord('capability', {
        title: 'NewCapability',
        subTitle: 'Subtitle',
        description: 'Description goes here'
      });
    }
    else {
      return this.store.find('capability', params.capability_id);
    }
  },
  afterModel: function(model) {
    var title = 'Tool Directory - ' + model.get('title') + ' (' + model.get('subTitle') + ')';
    Ember.$(document).attr('title', title);
  }
});
