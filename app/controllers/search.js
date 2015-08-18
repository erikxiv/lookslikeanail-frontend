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
            url: item.url
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
        var that = this;
        Ember.$.getJSON(item.url+'/readme').then(
          function(response) {
            item.set('description', atob(response.content));
          }
        );
      }
    }
  }
});
