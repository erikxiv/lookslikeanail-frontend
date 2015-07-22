import DS from 'ember-data';

var IsCapableOf = DS.Model.extend({
  created: DS.attr(),
  feature: DS.belongsTo('feature'),
  task: DS.belongsTo('task'),
  updated: DS.attr(),
});

IsCapableOf.reopenClass({
  FIXTURES: [
  ]
});

export default IsCapableOf;