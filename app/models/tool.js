import DS from 'ember-data';

var Tool = DS.Model.extend({
  title: DS.attr(),
  subTitle: DS.attr(),
  description: DS.attr(),
  created: DS.attr(),
  updated: DS.attr(),
  keywords: DS.attr(),
});

Tool.reopenClass({
  FIXTURES: [
  ]
});

export default Tool;