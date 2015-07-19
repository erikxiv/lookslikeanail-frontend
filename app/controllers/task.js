import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingTitle: false,
  isEditingSubtitle: false,
  isEditing: false,
  editing: null,

  title: function() {
    var t = this.model.get('title') ? this.model.get('title') : "NewTask";
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
        this.model.save();
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
