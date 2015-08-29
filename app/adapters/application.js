import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

var adapter = DS.RESTAdapter.extend({
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST,
  // ajaxSuccess: function(jqXHR, payload) {
  //   Rollbar.info("Received response from backend", jqXHR);
  //   console.log({jqXHR: jqXHR, payload: payload});
  //   return this._super(jqXHR, payload);
  // },
  ajax: function(url, type, options) {
    var audit = {
      request: {
        url: url,
        type: type
      },
      response: {
      }
    };
    if (options && options.data) {
      audit.request.data = options.data;
    }
    return this._super(url, type, options)
    .then(function(data) {
      audit.response.data = data;
      Rollbar.info(type + ' ' + url, audit);
      return data;
    })
    .catch(function(error) {
      audit.response.error = error;
      Rollbar.warning(type + ' ' + url, audit);
      throw error;
    });
  }
});

if (config.environment === 'development' || config.environment === 'test') {
  adapter = DS.FixtureAdapter.extend({
    find: function(store, type, id, snapshot) {
      // console.log("find: " + type.modelName);
      // If tool, get all related records as well, to (poorly) simulate REST backend
      if (type.modelName === 'tool') {
        var toolsToReturn;
        var tool = this._super(store, type, id, snapshot);
        if (! tool) {
          return tool;
        }
        return tool.then(function(tools) {
          toolsToReturn = tools;
          return Ember.RSVP.all([
            store.find('feature'),
            store.find('capability'),
            store.find('concept'),
            store.find('tool'),
            store.find('supports')
          ]);
        })
        .then(function() {
          return toolsToReturn;
        });
      }
      else {
        return this._super(store, type, id, snapshot);
      }
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
            store.find('feature'),
            store.find('capability'),
            store.find('concept'),
            store.find('supports')
          ]);
        })
        .then(function() {
          return toolsToReturn;
        });
      }
      else {
        return this._super(store, type, sinceToken);
      }
    }
  });
}
export default adapter;
