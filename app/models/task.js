import DS from 'ember-data';

var Task = DS.Model.extend({
  created: DS.attr(),
  description: DS.attr(),
  provides: DS.hasMany('provides'),
  keywords: DS.attr(),
  subTitle: DS.attr(),
  title: DS.attr(),
  updated: DS.attr()
});

Task.reopenClass({
  FIXTURES: [
  ]
});

export default Task;