import DS from 'ember-data';
import Concept from './concept';

var Capability = Concept.extend({
  features: DS.hasMany('feature'),
});

Capability.reopenClass({
  FIXTURES: [
  ]
});

export default Capability;