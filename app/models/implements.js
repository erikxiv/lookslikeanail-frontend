import DS from 'ember-data';

var Implements = DS.Model.extend({
  created: DS.attr(),
  feature: DS.belongsTo('feature'),
  tool: DS.belongsTo('tool'),
  updated: DS.attr(),
});

Implements.reopenClass({
  FIXTURES: [
  ]
});

export default Implements;