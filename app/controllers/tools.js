import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application"),
  // Fitler tools listing on capability/supports filters
  filteredTools: function() {
    var that = this;
    return this.get('model').filter(function(tool) {
      return that.get('application').get('capabilities').every(function(capability) {
        return ! capability.get('filter') || tool.get('features').some(function(feature) {
          return feature.get('capability').get('id') === capability.get('id');
        });
      }) &&
      that.get('application').get('tools').every(function(toolFilter) {
        return ! toolFilter.get('filter') || tool.get('features').some(function(feature) {
          return feature.get('supports').some(function(supports) {
            return supports.get('tool').get('id') === toolFilter.get('id');
          });
        });
      });
    });
  }.property('model.@each.title', 'controllers.application.capabilities.@each.filter', 'controllers.application.tools.@each.filter'),
  actions: {
    toggle: function(item) {
      var wasExpanded = item.get('isExpanded');
      this.model.setEach('isExpanded', false);
      item.set('isExpanded', ! wasExpanded);
    }
  }
});
