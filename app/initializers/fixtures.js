import feature from '../fixtures/feature';
import _implements from '../fixtures/implements';
import provides from '../fixtures/provides';
import capability from '../fixtures/capability';
import tool from '../fixtures/tool';

export default {
  name: 'fixtures',

  initialize: function() {
    feature.create();
    _implements.create();
    provides.create();
    capability.create();
    tool.create();
  }
};