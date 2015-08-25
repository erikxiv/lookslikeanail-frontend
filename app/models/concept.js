import DS from 'ember-data';

var Concept = DS.Model.extend({
  created: DS.attr(),
  description: DS.attr(),
  supportedBy: DS.hasMany('feature', {
    inverse: 'supports'
  }),
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