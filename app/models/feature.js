import DS from 'ember-data';
import Concept from './concept';

var Feature = Concept.extend({
  tool: DS.belongsTo('tool'),
  capability: DS.belongsTo('capability'),
  supports: DS.hasMany('supports'),
});

Feature.reopenClass({
  FIXTURES: [
  ]
});

export default Feature;