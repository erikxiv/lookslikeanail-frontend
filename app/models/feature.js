import DS from 'ember-data';
import Concept from './concept';

var Feature = Concept.extend({
  tool: DS.belongsTo('tool', {
    inverse: 'features'
  }),
  capability: DS.belongsTo('capability', {
    inverse: 'features'
  }),
  supports: DS.hasMany('concept', {
    inverse: 'supportedBy'
  }),

  supportsSomething: function() {
    return this.get('supports') && this.get('supports').length > 0;
  }.property('supports')
});

Feature.reopenClass({
  FIXTURES: [
  ]
});

export default Feature;