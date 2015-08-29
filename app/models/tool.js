import DS from 'ember-data';
import Concept from './concept';

var Tool = Concept.extend({
  features: DS.hasMany('feature', {
    inverse: 'tool'
  }),
});

Tool.reopenClass({
  FIXTURES: [
  ]
});

export default Tool;