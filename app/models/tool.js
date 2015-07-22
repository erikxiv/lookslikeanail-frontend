import DS from 'ember-data';

var Tool = DS.Model.extend({
  created: DS.attr(),
  description: DS.attr(),
  implements: DS.hasMany('implements'),
  keywords: DS.attr(),
  subTitle: DS.attr(),
  title: DS.attr(),
  updated: DS.attr()
});

Tool.reopenClass({
  FIXTURES: [
  ]
});

export default Tool;