import DS from 'ember-data';

var Concept = DS.Model.extend({
  created: DS.attr(),
  description: DS.attr(),
  keywords: DS.attr(),
  subTitle: DS.attr(),
  title: DS.attr(),
  updated: DS.attr()
});

Concept.reopenClass({
  FIXTURES: [
  ]
});

export default Concept;