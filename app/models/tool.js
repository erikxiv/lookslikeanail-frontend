import DS from 'ember-data';
import Concept from './concept';

var Tool = Concept.extend({
  features: DS.hasMany('feature'),
});

Tool.reopenClass({
  FIXTURES: [
  ]
});

export default Tool;