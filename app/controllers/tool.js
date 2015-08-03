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
  saveSuccess: function(data) {
    // console.log('Sucessfully saved: ' + data);
  },
  saveError: function(error) {
    Rollbar.error("Failed to save feature", error);
  },

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
      var that = this;
      // Close modal
      Ember.$('#addFeatureModal').modal('hide');
      // Add feature
      var feature = this.store.createRecord('feature');
      feature.save()
      .then(function(feature) {
        // Add implements
        var _implements = that.store.createRecord('implements', {
          tool: that.model,
          feature: feature
        });
        // Add isCapableOf
        var isCapableOf = that.store.createRecord('isCapableOf', {
          feature: feature,
          task: task
        });
        // Save
        _implements.save().then(that.saveSuccess, that.saveError);
        isCapableOf.save().then(that.saveSuccess, that.saveError);
        feature.save().then(that.saveSuccess, that.saveError);
      }, that.saveError)
      .catch(function (error) {
        Rollbar.error("Failed to save feature", error);
      });
    },
    removeFeature: function(feature) {
      feature.destroyRecord();
    }
  }
});
