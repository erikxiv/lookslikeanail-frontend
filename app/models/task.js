import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  subTitle: DS.attr(),
  description: DS.attr(),
  created: DS.attr(),
  updated: DS.attr(),
  keywords: DS.attr(),
});
