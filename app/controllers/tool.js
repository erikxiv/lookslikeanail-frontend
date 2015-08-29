import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application"),
  isEditingTitle: false,
  isEditingSubtitle: false,
  isEditing: false,
  editing: null,
  currentFeature: null,

  init: function() {
    var that = this;
    // Wire up feature modal closing to function
    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.$('#addFeatureModal').on('hide.bs.modal', function() {
        that.send('closingFeature');
      });
    });
  },
  saveSuccess: function() {
    // this.get('application').alert({
    //   level: 'success',
    //   message:'Changes saved',
    //   duration: 2000
    // });
  },
  saveError: function(error) {
    this.get('application').alert({
      level: 'danger',
      title: 'Failed to save changes',
      message: error,
      duration: 0
    });
    if (typeof Rollbar !== "undefined") {
      Rollbar.error("Failed to save changes", error);
    }
  },

  actions: {
    edit: function(what) {
      if (this.get('isEditing')) {
        this.set('isEditing'+this.get('editing'), false);
        this.model.save()
        .then(this.saveSuccess)
        .catch(this.saveError);
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
            this.model.save()
            .then(this.saveSuccess)
            .catch(this.saveError);
          }
        }
      }
    },
    delete: function() {
      var that = this;
      this.model.destroyRecord().then(function() {
        that.transitionToRoute('tools');
        that.saveSuccess();
      })
      .catch(this.saveError);
    },
    addFeature: function() {
      this.set('currentFeature', this.store.createRecord('feature', {
        tool: this.model
      }));
      // Show modal
      Ember.$('#addFeatureModal').modal('show');
    },
    configureFeature: function(feature) {
      this.set('currentFeature', feature);
      // Show modal
      Ember.$('#addFeatureModal').modal('show');
    },
    selectCapability: function(capability) {
      this.get('currentFeature').set('capability', capability);
      this.get('currentFeature').save()
      .then(this.saveSuccess)
      .catch(this.saveError);
      // BUG? When working with fixture adapter, the below seems to be necessary
      // due to the hasMany relationship reflexivity
      capability.save()
      .then(this.saveSuccess)
      .catch(this.saveError);

      // Close modal
      Ember.$('#addFeatureModal').modal('hide');
    },
    closingFeature: function() {
      // Remove the feature if not saved already (e.g. no capability)
      var feature = this.get('currentFeature');
      if (feature.get('isNew') && !feature.get('isSaving')) {
        feature.deleteRecord();
      }
    },
    removeFeature: function(feature) {
      feature.destroyRecord()
      .then(this.saveSuccess)
      .catch(this.saveError);
    },
    toggleSupports: function(concept) {
      var supports = null;
      // Check if the concept is already supported
      if (this.get('currentFeature').get('supports').any(function(s) {
        supports = s;
        return s.get('concept').get('id') === concept.get('id');
      })) {
        // Remove support
        console.log('destroy!');
        supports.destroyRecord();
      }
      else {
        console.log('create!');
        // Add support
        supports = this.store.createRecord('supports', {
          feature: this.get('currentFeature'),
          concept: concept
        });
        supports.save()
        .then(this.saveSuccess)
        .catch(this.saveError);
      }
    }
  }
});
