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
  })
});

Feature.reopenClass({
  FIXTURES: [
  ]
});

export default Feature;