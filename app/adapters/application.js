import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

var adapter = DS.RESTAdapter.extend({
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST
});

if (config.environment === 'development' || config.environment === 'test') {
  adapter = DS.FixtureAdapter.extend({
    find: function(store, type, id, snapshot) {
      // console.log("find: " + type.modelName);
      return this._super(store, type, id, snapshot);
    },
    findAll: function(store, type, sinceToken) {
      // console.log("findAll: " + type.modelName);
      // If tool, get all related records as well, to (poorly) simulate REST backend
      if (type.modelName === 'tool') {
        var toolsToReturn;
        return this._super(store, type, sinceToken)
        .then(function(tools) {
          toolsToReturn = tools;
          return Ember.RSVP.all([
            store.find('implements'),
            store.find('feature'),
            store.find('isCapableOf'),
            store.find('task')
          ]);
        })
        .then(function() {
          return toolsToReturn;
        });
      }
      else {
        return this._super(store, type, sinceToken);
      }
    },
    findMany: function(store, type, id, snapshot) {
      // console.log("findMany: " + type.modelName);
      return this._super(store, type, id, snapshot);
    },
    findRecord: function(store, type, id, snapshot) {
      // console.log("findRecord: " + type.modelName);
      return this._super(store, type, id, snapshot);
    },
    dummy: true
  });
}
export default adapter;
