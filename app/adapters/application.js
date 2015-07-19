import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: config.APP.API_NAMESPACE,
  host: config.APP.API_HOST
});
