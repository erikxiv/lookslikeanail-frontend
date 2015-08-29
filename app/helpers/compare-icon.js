import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value1, value2, propertyName) {
  if (value2 && value2.any && value2.any(function(item) {
    return item.get(propertyName) && item.get(propertyName).id === value1;
  })) {
    return new Ember.Handlebars.SafeString('<span class="glyphicon glyphicon-ok text-success pull-right" aria-hidden="true"></span>');
  }
  else if (value1 === value2) {
    return new Ember.Handlebars.SafeString('<span class="glyphicon glyphicon-ok text-success pull-right" aria-hidden="true"></span>');
  }
  return '';
}, 'currentFeature');