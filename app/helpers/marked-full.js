import Ember from 'ember';
import marked from 'npm:marked';

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  return Ember.String.htmlSafe(marked(markdown ? markdown : ""));
});