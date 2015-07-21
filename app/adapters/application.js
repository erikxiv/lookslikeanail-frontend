import DS from 'ember-data';
import config from '../config/environment';

var adapter = DS.RESTAdapter.extend({
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST
});

if (config.environment === 'development' || config.environment === 'test') {
  adapter = DS.FixtureAdapter.extend({});
}

export default adapter;
