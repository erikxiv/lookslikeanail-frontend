import DS from 'ember-data';

var supports = DS.Model.extend({
  created: DS.attr(),
  feature: DS.belongsTo('feature'),
  tool: DS.belongsTo('tool'),
  updated: DS.attr(),
});

supports.reopenClass({
  FIXTURES: [
  ]
});

export default supports;