import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingTitle: false,
  isEditingSubtitle: false,
  isEditing: false,
  editing: null,

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
        that.transitionToRoute('tasks');
      });
    }
  }
});
