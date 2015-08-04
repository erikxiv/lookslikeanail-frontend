import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application"),
  // Fitler tools listing on capability/supports filters
  filteredTools: function() {
    var that = this;
    return this.get('model').filter(function(tool) {
      return that.get('application').get('tasks').every(function(task) {
        return ! task.get('filter') || tool.get('implements').some(function(_implements) {
          return _implements.get('feature').get('isCapableOf').some(function(isCapableOf) {
            return isCapableOf.get('task').get('id') === task.get('id');
          });
        });
      }) &&
      that.get('application').get('tools').every(function(toolFilter) {
        return ! toolFilter.get('filter') || tool.get('implements').some(function(_implements) {
          return _implements.get('feature').get('supports').some(function(supports) {
            return supports.get('tool').get('id') === toolFilter.get('id');
          });
        });
      });
    });
  }.property('model.@each.title', 'controllers.application.tasks.@each.filter', 'controllers.application.tools.@each.filter'),
  actions: {
    toggle: function(item) {
      var wasExpanded = item.get('isExpanded');
      this.model.setEach('isExpanded', false);
      item.set('isExpanded', ! wasExpanded);
    }
  }
});
