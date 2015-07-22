import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('tool');
    // return this.store.find('tool').then(function(tools){
    //   return Ember.RSVP.all(tools.getEach('implements')).then(function(_implements){
    //     console.log(_implements);
    //     return tools;
    //   });
    // });
  }
});
