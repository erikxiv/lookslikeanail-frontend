import DS from 'ember-data';

var Provides = DS.Model.extend({
  created: DS.attr(),
  feature: DS.belongsTo('feature'),
  capability: DS.belongsTo('capability'),
  updated: DS.attr(),
});

Provides.reopenClass({
  FIXTURES: [
  ]
});

export default Provides;