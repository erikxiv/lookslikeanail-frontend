import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingTitle: false,
  isEditingSubtitle: false,
  isEditing: false,
  editing: null,

  title: function() {
    var t = this.model.get('title') ? this.model.get('title') : "NewTool";
    var s = this.model.get('subTitle') ? this.model.get('subTitle') : "Subtitle";
    return t + ' (' + s + ')';
  }.property('model.title', 'model.subTitle'),

  actions: {
    edit: function(what) {
      if (this.get('isEditing')) {
        this.set('isEditing'+this.get('editing'), false);
        this.model.save();
      }
      this.set('isEditing'+what, true);
      this.set('isEditing', true);
      this.set('editing', what);
    },
    save: function() {
      if (this.get('isEditing')) {
        this.set('isEditing'+this.get('editing'), false);
        this.set('isEditing', false);
        // Only save if changes have been made
        if (this.model.get('isDirty')) {
          // Roll back if title, subtitle or description is empty
          if (this.model.get('title') === '' ||
              this.model.get('subTitle') === '' ||
              this.model.get('description') === '') {
            this.model.rollback();
          }
          else {
            this.model.save();
          }
        }
      }
    },
    delete: function() {
      var that = this;
      this.model.destroyRecord().then(function() {
        that.transitionToRoute('tools');
      });
    },
    addFeature: function(task) {
      // Close modal
      Ember.$('#addFeatureModal').modal('hide');
      // Add feature
      var feature = this.store.createRecord('feature');
      // Add implements
      var _implements = this.store.createRecord('implements', {
        tool: this.model,
        feature: feature
      });
      // Add isCapableOf
      var isCapableOf = this.store.createRecord('isCapableOf', {
        feature: feature,
        task: task
      });
      // Save
      feature.save();
      _implements.save();
      isCapableOf.save();
    },
    removeFeature: function(feature) {
      feature.destroyRecord();
    }
  }
});
