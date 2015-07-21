import DS from 'ember-data';

 var Task = DS.Model.extend({
  title: DS.attr(),
  subTitle: DS.attr(),
  description: DS.attr(),
  created: DS.attr(),
  updated: DS.attr(),
  keywords: DS.attr(),
});

Task.reopenClass({
  FIXTURES: [
  ]
});

export default Task;