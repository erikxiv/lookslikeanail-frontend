import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,

  // Update data on query changes
  update: function() {
    var that = this;
    that.set('githubstatus', 'Loading');
    Ember.$.getJSON("https://api.github.com/search/repositories?q="+this.get('q')).then(
      function(response) {
        that.set('github', response.items.map(function (item) {
          return Ember.Object.create({
            title: item.name,
            subTitle: 'GitHub',
            description: item.description,
            created: item.created_at,
            updated: item.updated_at,
            icon: item.owner.avatar_url,
            url: item.url,
            htmlUrl: item.html_url,
            fullName: item.full_name
          });
        }));
        that.set('githubstatus', 'Done');
      }
    );
  }.observes('q'),

  actions: {
    toggle: function(item) {
      var wasExpanded = item.get('isExpanded');
      this.github.setEach('isExpanded', false);
      item.set('isExpanded', ! wasExpanded);
      if (! wasExpanded) {
        // Get readme
        Ember.$.getJSON(item.url+'/readme').then(
          function(response) {
            item.set('description', atob(response.content));
          }
        );
      }
    },
    addTool: function(tool) {
      var newTool = this.store.createRecord('tool', {
        title: tool.get('title'),
        subTitle: tool.get('subTitle'),
        description: tool.get('description')
      });
      newTool.save();
      this.transitionToRoute('tool', newTool);
    }
  }
});
