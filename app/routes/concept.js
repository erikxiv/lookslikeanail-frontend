import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (params.concept_id === 'new') {
      return this.store.createRecord('concept', {
        title: 'NewConcept',
        subTitle: 'Subtitle',
        description: 'Description goes here'
      });
    }
    else {
      return this.store.find('concept', params.concept_id);
    }
  },
  afterModel: function(model) {
    var title = 'Tool Directory - ' + model.get('title') + ' (' + model.get('subTitle') + ')';
    Ember.$(document).attr('title', title);
  }
});
