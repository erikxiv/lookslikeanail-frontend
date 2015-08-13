import Ember from 'ember';
import summarize from 'npm:summarize-markdown';

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  return summarize(markdown);
});