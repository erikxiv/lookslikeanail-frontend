import DS from 'ember-data';

var Feature = DS.Model.extend({
  created: DS.attr(),
  description: DS.attr(),
  implements: DS.belongsTo('implements'),
  provides: DS.hasMany('provides'),
  keywords: DS.attr(),
  subTitle: DS.attr(),
  supports: DS.hasMany('supports'),
  title: DS.attr(),
  updated: DS.attr()
});

Feature.reopenClass({
  FIXTURES: [
  ]
});

export default Feature;